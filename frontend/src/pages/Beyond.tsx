import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { beyond } from '../data/beyond'

export function Beyond() {
  return (
    <Section
      eyebrow="Beyond Engineering"
      title="挑戦してきたこと"
      intro="技術以外の領域で挑戦し、今の自分につながっている経験たちです。"
    >
      <div className="grid grid--cards">
        {beyond.map((item, i) => (
          <Reveal key={item.title} as="div" delay={i * 50} className="card beyond-card">
            <h3 className="beyond-card__title">{item.title}</h3>
            {item.period && <span className="beyond-card__period">{item.period}</span>}
            <p className="beyond-card__body">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
