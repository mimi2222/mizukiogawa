import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { skills } from '../data/skills'
import { education } from '../data/education'

export function About() {
  return (
    <>
      <Section eyebrow="About" title="プロフィール">
        <div className="prose">
          {profile.about.map((p, i) => (
            <Reveal key={i} as="div" delay={i * 60}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <h3 className="subhead">学歴</h3>
        <ol className="edu-list">
          {education.map((item, i) => (
            <Reveal key={item.school} as="li" delay={i * 60} className="edu-item">
              <span className="edu-period">{item.period}</span>
              <div className="edu-body">
                <p className="edu-school">{item.school}</p>
                {item.detail && <p className="edu-detail">{item.detail}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Skills" title="スキル" className="section--alt">
        <div className="grid grid--skills">
          {skills.map((group, i) => (
            <Reveal key={group.category} as="div" delay={i * 70} className="card skill-card">
              <h3 className="skill-card__title">{group.category}</h3>
              <ul className="stack">
                {group.items.map((item) => (
                  <li key={item} className="stack__item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Career Vision" title="キャリアビジョン">
        <div className="prose prose--accent">
          {profile.careerVision.map((p, i) => (
            <Reveal key={i} as="div" delay={i * 60}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
