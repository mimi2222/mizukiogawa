import { useState } from 'react'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { experience } from '../data/experience'

// 初期表示は新しい順に2件。「もっと見る」で過去の経歴を1件ずつ追加表示する
const initialCount = 2

export function Experience() {
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const visible = experience.slice(0, visibleCount)
  const remaining = experience.length - visibleCount

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="経歴"
      className="section--alt"
    >
      <ol className={`timeline ${remaining > 0 ? 'timeline--truncated' : ''}`.trim()}>
        {visible.map((item, i) => (
          <Reveal
            key={`${item.org}-${i}`}
            as="li"
            delay={i < initialCount ? i * 70 : 0}
            className="timeline__item"
          >
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__body">
              <span className="timeline__period">{item.period}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__org">{item.org}</p>
              <p className="timeline__desc">{item.description}</p>
              {item.stack && (
                <ul className="stack">
                  {item.stack.map((s) => (
                    <li key={s} className="stack__item">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
      {remaining > 0 && (
        <div className="timeline__more">
          <button
            type="button"
            className="timeline__more-btn"
            onClick={() => setVisibleCount((n) => n + 1)}
          >
            もっと見る ↓
          </button>
        </div>
      )}
    </Section>
  )
}
