import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { education } from '../data/education'
import { awards } from '../data/awards'

/** 学歴と研究をまとめた Profile セクション（1ページ構成の一部）。 */
export function Profile() {
  const { research } = profile

  return (
    <Section id="profile" eyebrow="Profile" title="プロフィール">
      <h3 className="subhead">学歴</h3>
      <ol className="edu-list edu-list--degrees">
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

      <h3 className="subhead">研究</h3>
      <Reveal as="div" className="research">
        <p className="research__title">{research.title}</p>
        <p className="research__meta">
          <a
            href={research.labUrl}
            target="_blank"
            rel="noreferrer"
            className="research__lab-link"
          >
            {research.lab}
          </a>
          （{research.affiliation}）
        </p>
        <p className="research__summary">{research.summary}</p>
        <div className="research__links">
          <Link to={research.link} className="link-arrow">
            研究の詳細を見る →
          </Link>
        </div>
      </Reveal>

      <h3 className="subhead">受賞・実績</h3>
      <ol className="edu-list">
        {awards.map((award, i) => (
          <Reveal key={award.title} as="li" delay={i * 60} className="edu-item">
            <span className="edu-period">{award.date}</span>
            <div className="edu-body">
              <p className="edu-school">{award.title}</p>
              <p className="edu-detail">{award.issuer}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <h3 className="subhead">語学スキル</h3>
      <ol className="edu-list">
        {profile.languages.map((lang, i) => (
          <Reveal key={lang.name} as="li" delay={i * 60} className="edu-item">
            <span className="edu-period">{lang.name}</span>
            <div className="edu-body">
              <p className="edu-school">{lang.level}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
