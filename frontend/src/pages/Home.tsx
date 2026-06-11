import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* ヒーロー */}
      <section className="hero">
        <div className="container hero__inner">
          <Reveal className="hero__content">
            <p className="eyebrow">{profile.roles.join(' · ')}</p>
            <h1 className="hero__title">
              <span className="hero__name-en">{profile.nameEn}</span>
              <span className="hero__name-jp">{profile.name}</span>
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__intro">{profile.heroIntro}</p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn--primary">
                制作物を見る
              </Link>
              <Link to="/about" className="btn btn--ghost">
                自己紹介
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero__glow" aria-hidden="true" />
      </section>

      {/* 注目の実績 */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head section__head--row">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="section__title">注目の実績</h2>
            </div>
            <Link to="/projects" className="link-arrow">
              すべて見る →
            </Link>
          </Reveal>
          <div className="grid grid--featured">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} as="div">
                <ProjectCard project={project} featured />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* セクションへの導線 */}
      <section className="section section--tight">
        <div className="container">
          <div className="grid grid--nav">
            {[
              { to: '/about', en: 'About', jp: 'プロフィール / スキル / キャリア' },
              { to: '/experience', en: 'Experience', jp: 'インターン・課外活動の経歴' },
              { to: '/beyond', en: 'Beyond', jp: '技術以外に挑戦してきたこと' },
              { to: '/contact', en: 'Contact', jp: 'お問い合わせ' },
            ].map((item, i) => (
              <Reveal key={item.to} delay={i * 60} as="div">
                <Link to={item.to} className="card nav-card">
                  <span className="nav-card__en">{item.en}</span>
                  <span className="nav-card__jp">{item.jp}</span>
                  <span className="nav-card__arrow">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
