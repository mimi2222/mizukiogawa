import { Link } from 'react-router-dom'
import type { Project } from '../data/types'

interface Props {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: Props) {
  const stack = project.stack ?? []
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`card project-card ${featured ? 'project-card--featured' : ''}`}
    >
      <div className="project-card__top">
        <span className="tag">{project.kind}</span>
        {project.period && <span className="project-card__period">{project.period}</span>}
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      {project.subtitle && <p className="project-card__subtitle">{project.subtitle}</p>}
      <p className="project-card__summary">{project.summary}</p>
      {stack.length > 0 && (
        <ul className="stack">
          {stack.slice(0, featured ? 8 : 4).map((s) => (
            <li key={s} className="stack__item">
              {s}
            </li>
          ))}
          {!featured && stack.length > 4 && (
            <li className="stack__item stack__item--more">+{stack.length - 4}</li>
          )}
        </ul>
      )}
      <span className="project-card__more">詳しく見る →</span>
    </Link>
  )
}
