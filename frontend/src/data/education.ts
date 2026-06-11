import type { EducationItem } from './types'

// 学歴。新しいものを上にして表示する（配列の先頭が最新）。
// ▼ 大学の進学年・卒業年は推定です。違っていたら該当行の period を直してください。
export const education: EducationItem[] = [
  {
    period: '2026.4 – 2028.3（修了予定）',
    school: '東京大学大学院 学際情報学府',
    detail: '先端表現情報学コース',
  },
  {
    period: '2023.4 – 2026.3（卒業）',
    school: '東京大学 工学部 電子情報工学科',
  },
  {
    period: '2021.4 – 2023.3（進学）',
    school: '東京大学 教養学部 前期課程 理科一類',
  },
  {
    period: '2018.4 – 2021.3（卒業）',
    school: '豊島岡女子学園高等学校',
  },
]
