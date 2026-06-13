import { useState } from 'react'

interface Props {
  /** 画像パス（例: /images/portrait.jpg）。public/images に置く。 */
  src: string
  alt: string
  /** 画像が無いときに表示するプレースホルダーのラベル */
  label?: string
  className?: string
}

/**
 * 画像を表示する。ファイルがまだ無い／読み込み失敗時は、崩れずに
 * おしゃれなプレースホルダー（ラベル付き）にフォールバックする。
 * 写真を public/images に置けばそのまま差し替わる。
 */
export function Photo({ src, alt, label, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`photo photo--placeholder ${className}`.trim()} role="img" aria-label={alt}>
        <span className="photo__label">{label ?? 'Photo'}</span>
        <span className="photo__hint">写真を追加</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`photo ${className}`.trim()}
      onError={() => setFailed(true)}
    />
  )
}
