import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    role: 'ソフトウェアエンジニアインターン（Productチーム）',
    org: 'SakanaAI株式会社',
    period: '2026年10月 〜（予定）',
    description: 'プロダクト開発に従事。',
  },
  {
    role: 'R&Dエンジニアインターン',
    org: 'ソニーグループ株式会社',
    period: '2026年9月（3週間）',
    stack: ['Python', 'TypeScript'],
    description:
      '次世代UI / ヒューマンコンピュータインタラクション（HCI）の研究領域で、初心者による動画・アニメーション生成にどのようなUIが適しているかを探索。多数のUI案をデザインし、Python・TypeScriptでプロトタイプを実装。ユーザー評価を通じてデザインを比較・改善した。',
  },
  {
    role: 'ソフトウェアエンジニアインターン',
    org: 'LINEヤフー株式会社（LY Corporation）',
    period: '2026年8月（1ヶ月）',
    stack: ['Java', 'Go'],
    description:
      'AIによる音声応対で電話予約を完了させるプロダクトにおいて、契約・決済関連のB2B機能のバックエンド開発と外部API連携をJavaで担当。また、LLMと音声対話モデルの精度向上に取り組み、本番ログの収集・実装や、非同期処理まわりのツール・ガードレールの整備をGoで行い、応答品質を改善した。',
  },
  {
    role: 'AIエンジニア / ソフトウェアエンジニアインターン',
    org: '株式会社neoAI',
    period: '2024年5月 〜 2026年9月（2年5ヶ月）',
    stack: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Azure'],
    description:
      'ソリューション事業（PoC・本番開発）では、クライアントと週次で議論しながら、課題の特定、使用技術・アーキテクチャの選定、開発対象の策定までを担当。PoC段階からサブPMとして参画し、LLMの選定・ファインチューニングによる精度向上を主導、ルールベース処理をLLMパイプラインから分離してAPIコストと処理時間を削減した。SaaSプロダクト「neoAI Chat」（社内文書をRAGで参照しながら回答する企業向けAIチャットサービス）では、PdMとの要件定義からFigmaデザイン、React・Next.jsのフロントエンドとPython・FastAPIのバックエンド開発まで、機能開発を一貫して担当。社内で新規領域であった外部サービス連携の認可基盤を、ドメイン駆動設計とクリーンアーキテクチャに基づいて設計・実装した。',
  },
  {
    role: '3Dプロダクトデザイナーインターン',
    org: '小川峰株式会社',
    period: '2025年10月 〜 2026年9月',
    stack: ['Rhinoceros', 'Fusion 360'],
    description:
      'Rhinoceros・Fusion 360による布地への3Dプリント用装飾デザインをデータ作成から生産まで担当。関連する展示会・イベントの企画運営やブランドコンセプト策定に参画。',
  },
  {
    role: 'メディアアートインストラクター・開発インターン',
    org: 'ライフイズテック株式会社',
    period: '2022年7月 〜 2023年8月',
    stack: ['JavaScript', 'p5.js', 'Processing'],
    description:
      'p5.js および Processing を用いたインタラクティブメディアアート作品を開発。また、中高生に対してプログラミングを指導した。',
  },
]
