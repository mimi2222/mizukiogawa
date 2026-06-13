import type { Award } from './types'

// 受賞・出場歴。新しいものを上にして表示する（配列の先頭が最新）。
export const awards: Award[] = [
  {
    title: 'ビジネスコンテスト入賞',
    issuer: '株式会社ベルパーク',
    date: '2021年12月',
  },
  {
    title: 'WSC Tournament of Champions 出場',
    issuer: "World Scholar's Cup",
    date: '2019年11月',
  },
  {
    title: '科学の甲子園 都大会出場',
    issuer: '国立研究開発法人科学技術振興機構（JST）',
    date: '2019年11月',
  },
  {
    title: 'Grow with Google アイデアソン入賞',
    issuer: '株式会社マイナビ',
    date: '2019年6月',
  },
]
