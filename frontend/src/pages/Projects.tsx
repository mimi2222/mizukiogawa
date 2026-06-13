import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { WorkCard } from '../components/WorkCard'
import { workItems } from '../data/work'

export function Projects() {
  // 注目の項目を先頭に
  const sorted = [...workItems].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  )

  return (
    <Section
      id="projects"
      eyebrow="Work & Beyond"
      title="制作物"
      className="section--alt"
    >
      <div className="grid grid--cards">
        {sorted.map((item, i) => (
          <Reveal key={item.key} as="div" delay={Math.min(i, 6) * 50}>
            <WorkCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
