import type { ContactLink } from './types'

export const profile = {
  name: '小川 美杉',
  nameEn: 'Mizuki Ogawa',
  about: [
    '東京大学大学院 学際情報学府 先端表現情報学コース（2028年3月修了予定）。学部は工学部 電子情報工学科。',
    'AIエンジニア／ソフトウェアエンジニアとして、スタートアップでの約2年間の長期インターンを通じ、LLMを活用したPoC開発から本番実装、SaaSのフロントエンド開発まで幅広く携わってきました。',
    '研究ではIPSJ INTERACTION 2026にて衣服カスタマイズ支援システムを発表し、一般投票で上位入選。技術を使って「作りたいものを自分の手で形にする」ことと「社会の課題を解決すること」の両方を追いかけています。',
  ],
  // Profile セクションの「語学スキル」で表示する内容。
  languages: [
    { name: '日本語', level: '母語' },
    { name: '英語', level: 'TOEFL iBT 97（2025年4月取得）' },
  ],
  // Profile セクションの「研究」で表示する内容。
  research: {
    lab: '苗村研究室',
    labUrl: 'https://nae-lab.org/',
    affiliation: '東京大学大学院 学際情報学府 先端表現情報学コース',
    title: 'Cloth Custom TrAIner — 初心者のための衣服カスタマイズ支援システム',
    summary:
      '衣服画像とカスタマイズの方向性を入力すると、素材の制約を考慮したカスタマイズ案・完成予想図・段階的な制作手順を自動生成するWebシステム。複数のLLMを組み合わせたパイプラインとして設計・実装した。IPSJ INTERACTION 2026 にて発表し、会場の一般投票で上位入選。',
    link: '/projects/cloth-custom-trainer',
  },
}

export const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mizukiogawa0310',
    href: 'https://www.linkedin.com/in/mizukiogawa0310/',
    icon: 'linkedin',
  },
]
