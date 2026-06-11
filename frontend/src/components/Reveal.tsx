import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  children: ReactNode
  /** 連続表示で少しずつ遅らせるときに使う（ms） */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/**
 * スクロールで画面に入ったときに、下からふわっとフェードインさせる軽量ラッパー。
 * CSS トランジションのみで実現し、ライブラリには依存しない。
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const Tag = as
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
