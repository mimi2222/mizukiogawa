import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <Section
      eyebrow="Work"
      title="開発・研究実績"
      intro="LLMを活用したプロダクト開発・研究から、個人開発まで。各カードをクリックすると詳細を表示します。"
    >
      <div className="grid grid--featured">
        {featured.map((project, i) => (
          <Reveal key={project.slug} as="div" delay={i * 80}>
            <ProjectCard project={project} featured />
          </Reveal>
        ))}
      </div>

      <h3 className="subhead">その他の制作物</h3>
      <div className="grid grid--cards">
        {others.map((project, i) => (
          <Reveal key={project.slug} as="div" delay={i * 50}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
