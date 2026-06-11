import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title="経歴"
      intro="長期インターンや課外活動を通じて積み重ねてきた経験です。"
    >
      <ol className="timeline">
        {experience.map((item, i) => (
          <Reveal key={`${item.org}-${i}`} as="li" delay={i * 70} className="timeline__item">
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
    </Section>
  )
}
