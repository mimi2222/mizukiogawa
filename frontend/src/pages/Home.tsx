import { useEffect } from 'react'
import { Reveal } from '../components/Reveal'
import { Photo } from '../components/Photo'
import { profile } from '../data/profile'
import { Profile } from './Profile'
import { Experience } from './Experience'
import { Projects } from './Projects'

export function Home() {
  // 最上部（about）に来たら 1 秒後に profile へゆっくり自動スクロール。
  // ユーザーが自分でスクロール／操作したら割り込んで中断する。
  useEffect(() => {
    // 既に下へスクロールしている場合（途中からの遷移など）は何もしない
    if (window.scrollY > 100) return

    let cancelled = false
    let raf = 0
    const cancel = () => {
      cancelled = true
      window.cancelAnimationFrame(raf)
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', cancel)
    }
    window.addEventListener('wheel', cancel, { passive: true })
    window.addEventListener('touchstart', cancel, { passive: true })
    window.addEventListener('keydown', cancel)

    // ゆっくりスクロール（自前アニメーション。ネイティブ smooth より遅く制御できる）
    const slowScrollTo = (target: number, duration: number) => {
      const start = window.scrollY
      const distance = target - start
      let startTime = 0
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const step = (now: number) => {
        if (cancelled) return
        if (!startTime) startTime = now
        const progress = Math.min((now - startTime) / duration, 1)
        window.scrollTo(0, start + distance * easeInOutCubic(progress))
        if (progress < 1) raf = window.requestAnimationFrame(step)
      }
      raf = window.requestAnimationFrame(step)
    }

    const timer = window.setTimeout(() => {
      if (!cancelled) {
        const profile = document.getElementById('profile')
        if (profile) {
          slowScrollTo(profile.getBoundingClientRect().top + window.scrollY, 1000)
        }
      }
    }, 500)

    return () => {
      window.clearTimeout(timer)
      cancel()
    }
  }, [])

  return (
    <>
      {/* About（ヒーロー：着地点） */}
      <section id="about" className="hero">
        <div className="container hero__inner">
          <Reveal className="hero__content">
            <h1 className="hero__title">
              <span className="hero__name-en">{profile.nameEn}</span>
              <span className="hero__name-jp">{profile.name}</span>
            </h1>
          </Reveal>
          <Reveal className="hero__media" delay={120}>
            <Photo
              src="/images/portrait.jpg"
              alt={`${profile.name}のポートレート`}
              label="Portrait"
              className="hero__portrait"
            />
          </Reveal>
        </div>
      </section>

      {/* Profile（学歴・研究） */}
      <Profile />

      {/* Experience（経歴）— 学歴・研究のすぐ下 */}
      <Experience />

      {/* Projects（制作物） */}
      <Projects />
    </>
  )
}
