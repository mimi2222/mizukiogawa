import { Link } from 'react-router-dom'
import { Photo } from './Photo'
import type { WorkItem } from '../data/work'

interface Props {
  item: WorkItem
}

/**
 * Projects と Beyond を同じ見た目で並べるための共通カード。
 * 一覧では「写真・タイトル・軽い説明」だけを見せ、技術スタックや
 * 具体的な内容は詳細ページ（詳しく見る）に隠す。
 * 詳細ページを持つ項目（to あり）はリンクに、持たない項目は div になる。
 */
export function WorkCard({ item }: Props) {
  const featured = Boolean(item.featured)
  // 写真は data に無ければ仮パスを当て、Photo 側でプレースホルダーにフォールバック
  const cover = item.image ?? `/images/work/${item.key}.jpg`

  const inner = (
    <>
      <div className="project-card__cover">
        <Photo src={cover} alt={item.title} label={item.title} />
      </div>
      <div className="project-card__top">
        <span className="tag">{item.label}</span>
      </div>
      <h3 className="project-card__title">{item.title}</h3>
      <p className="project-card__summary">{item.summary}</p>
      {item.to && <span className="project-card__more">詳しく見る →</span>}
    </>
  )

  const className = `card project-card ${featured ? 'project-card--featured' : ''}`.trim()

  return item.to ? (
    <Link to={item.to} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  )
}
