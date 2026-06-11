import type { ContactLink } from './types'

export const profile = {
  name: '小川美杉',
  nameEn: 'Mizuki Ogawa',
  roles: ['AI Engineer', 'Software Engineer'],
  tagline: '作りたいものを自分の手で形にし、社会の課題を解決する。',
  // ヒーローで使う1〜2文の導入
  heroIntro:
    'LLMを活用したプロダクト開発から、衣服カスタマイズ支援システムの研究まで。技術で「作りたいもの」と「社会の課題解決」の両方を追いかけています。',
  about: [
    '東京大学大学院 学際情報学府 先端表現情報学コース（2028年3月修了予定）。学部は工学部 電子情報工学科。',
    'AIエンジニア／ソフトウェアエンジニアとして、スタートアップでの約2年間の長期インターンを通じ、LLMを活用したPoC開発から本番実装、SaaSのフロントエンド開発まで幅広く携わってきました。',
    '研究ではIPSJ INTERACTION 2026にて衣服カスタマイズ支援システムを発表し、一般投票で上位入選。技術を使って「作りたいものを自分の手で形にする」ことと「社会の課題を解決すること」の両方を追いかけています。',
  ],
  careerVision: [
    '職種にかかわらず、身近な負や社会の課題を解決したいと思っています。技術を使ってもそうでなくても、課題を見つけて、課題に共感して、それを作って提供するまでを一貫してできる人材になっていきたい。',
    'SWEにとどまらずAIエンジニアやビジネス領域にも染み出しながら、スピード感を持って自分のやれる範囲を拡張していきたい。アプリケーション層にとどまらず、モデルや基盤レイヤーまで理解の深いエンジニアを目指しています。',
  ],
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'mimi.ogawa.0310@gmail.com',
    href: 'mailto:mimi.ogawa.0310@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/mimi2222',
    href: 'https://github.com/mimi2222',
  },
]
