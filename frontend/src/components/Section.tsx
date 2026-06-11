import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  /** 小さい英字のラベル（例: ABOUT, WORK） */
  eyebrow?: string
  title: string
  intro?: ReactNode
  children: ReactNode
  id?: string
  className?: string
}

/** ページ内セクションの共通レイアウト（見出し＋本文）。 */
export function Section({ eyebrow, title, intro, children, id, className = '' }: Props) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <Reveal className="section__head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="section__title">{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
