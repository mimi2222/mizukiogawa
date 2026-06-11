// ポートフォリオ全体で使う型定義。
// 文章・実績データ（profile / skills / projects / experience / beyond）は
// すべてこの型に沿って data/ 配下に置く。編集は基本 data/ だけでOK。

export interface SkillGroup {
  /** カテゴリ名（例: 言語、フレームワーク・ライブラリ） */
  category: string
  /** スキル名の配列 */
  items: string[]
}

export interface LinkItem {
  label: string
  url: string
}

export interface ProjectBlock {
  /** 詳細ページ内の小見出し（例: 背景・動機、特に注力したこと、成果） */
  heading: string
  /** 本文。改行は段落として扱う */
  body: string
}

export interface Project {
  /** URL用スラッグ。/projects/:slug に対応 */
  slug: string
  title: string
  /** タイトル下のサブコピー */
  subtitle?: string
  /** 種別（卒業研究 / インターン / 個人開発 など） */
  kind: string
  /** 所属・組織 */
  org?: string
  period?: string
  /** 使用技術（無い場合は省略可） */
  stack?: string[]
  /** 一覧カードに出す短い説明 */
  summary: string
  /** トップ・一覧で強調表示するか */
  featured?: boolean
  /** 詳細ページの本文ブロック群 */
  blocks?: ProjectBlock[]
  /** 外部リンク（公開URL・デモ動画など） */
  links?: LinkItem[]
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  stack?: string[]
  description: string
}

export interface BeyondItem {
  title: string
  period?: string
  body: string
}

export interface EducationItem {
  /** 在籍期間や入学年（例: 2026.4 – 2028.3（予定）, 2021.4 入学） */
  period: string
  /** 学校・課程名 */
  school: string
  /** 学科・コースなどの補足 */
  detail?: string
}

export interface ContactLink {
  label: string
  /** 表示する値（メールアドレスやユーザー名など） */
  value: string
  href: string
}
