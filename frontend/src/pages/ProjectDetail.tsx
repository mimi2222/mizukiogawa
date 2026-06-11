import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section">
        <div className="container narrow">
          <h1 className="section__title">実績が見つかりませんでした</h1>
          <p className="prose">
            <Link to="/projects" className="link-arrow">
              ← 制作物一覧へ戻る
            </Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <article className="section">
      <div className="container narrow">
        <Reveal className="detail__head">
          <Link to="/projects" className="link-back">
            ← 制作物一覧
          </Link>
          <div className="detail__meta">
            <span className="tag">{project.kind}</span>
            {project.org && <span className="detail__org">{project.org}</span>}
            {project.period && <span className="detail__period">{project.period}</span>}
          </div>
          <h1 className="detail__title">{project.title}</h1>
          {project.subtitle && <p className="detail__subtitle">{project.subtitle}</p>}
          {project.stack && project.stack.length > 0 && (
            <ul className="stack stack--lg">
              {project.stack.map((s) => (
                <li key={s} className="stack__item">
                  {s}
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        {project.blocks?.map((block, i) => (
          <Reveal key={block.heading} as="section" delay={i * 50} className="detail__block">
            <h2 className="detail__block-heading">{block.heading}</h2>
            <p className="detail__block-body">{block.body}</p>
          </Reveal>
        ))}

        {project.links && project.links.length > 0 && (
          <Reveal className="detail__links">
            <h2 className="detail__block-heading">リンク</h2>
            <div className="detail__links-row">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </article>
  )
}
