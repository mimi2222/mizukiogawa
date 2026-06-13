import type { Category } from './types'

// 制作物・挑戦の絞り込みカテゴリ。
// label … フィルタのピル表示（英字）、jp … カードのチップ表示（日本語）。
export const categories: { id: Category; label: string; jp: string }[] = [
  { id: 'tech', label: 'Tech', jp: '技術' },
  { id: 'business', label: 'Business', jp: 'ビジネス' },
  { id: 'creative', label: 'Creative', jp: 'クリエイティブ' },
  { id: 'beyond', label: 'Beyond', jp: '挑戦' },
]
