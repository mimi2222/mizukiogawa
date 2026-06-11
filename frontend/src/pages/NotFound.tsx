import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section section--center">
      <div className="container narrow">
        <span className="eyebrow">404</span>
        <h1 className="section__title">ページが見つかりませんでした</h1>
        <p className="prose">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link to="/" className="btn btn--primary">
          トップへ戻る
        </Link>
      </div>
    </section>
  )
}
