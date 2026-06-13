import { projects } from './projects'
import { beyond } from './beyond'
import { categories } from './categories'
import type { Category } from './types'

// Projects（開発・研究）と Beyond（技術以外の挑戦）を 1 つの一覧にまとめたもの。
// /projects ページではこの配列をタグで絞り込んで表示する。

export interface WorkItem {
  key: string
  /** カード左上のチップ（種別 or カテゴリ） */
  label: string
  title: string
  subtitle?: string
  period?: string
  summary: string
  tags: Category[]
  /** 詳細ページへのリンク（Projects のみ。Beyond は詳細ページを持たない） */
  to?: string
  stack?: string[]
  featured?: boolean
  /** 一覧カードのサムネイル画像（public/images 配下）。未指定は仮パスでプレースホルダー表示 */
  image?: string
}

const jpLabel = (tag: Category) => categories.find((c) => c.id === tag)?.jp ?? '挑戦'

// 詳細ページに見せる中身（本文ブロック or リンク）がある項目だけ「詳しく見る」を出す
const hasDetail = (p: (typeof projects)[number]) =>
  Boolean((p.blocks && p.blocks.length) || (p.links && p.links.length))

export const workItems: WorkItem[] = [
  ...projects.map(
    (p): WorkItem => ({
      key: p.slug,
      label: p.kind,
      title: p.title,
      subtitle: p.subtitle,
      period: p.period,
      summary: p.summary,
      tags: p.tags ?? ['tech'],
      to: hasDetail(p) ? `/projects/${p.slug}` : undefined,
      stack: p.stack,
      featured: p.featured,
      image: p.image ?? `/images/projects/${p.slug}.jpg`,
    }),
  ),
  ...beyond.map((b): WorkItem => {
    const tags = b.tags ?? ['beyond']
    return {
      key: b.title,
      label: b.label ?? jpLabel(tags[0]),
      title: b.title,
      period: b.period,
      summary: b.body,
      tags,
      featured: b.featured,
      image: b.image,
    }
  }),
]
