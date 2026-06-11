import { useEffect, useRef, useState } from 'react'

interface Options {
  /** 一度表示されたら監視を解除する（再スクロールで再生しない） */
  once?: boolean
  /** ビューポートに対するマージン */
  rootMargin?: string
  threshold?: number
}

/**
 * 要素が画面内に入ったかを返す軽量フック。IntersectionObserver を使うだけで
 * 外部ライブラリには依存しない。スクロール連動のフェードイン等に使う。
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.12,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // アニメーションを控える設定のユーザーには即表示する
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, inView }
}
