import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'cloth-custom-trainer',
    title: 'Cloth Custom TrAIner',
    subtitle: '初心者のための衣服カスタマイズ支援システム',
    kind: '卒業研究',
    org: '東京大学 苗村研究室',
    period: '2025年4月 〜 現在',
    stack: ['Python', 'TypeScript', 'Next.js', 'React', 'FastAPI', 'Azure OpenAI Service', 'Vercel'],
    image: '/images/cloth_customization.png',
    featured: true,
    tags: ['tech', 'creative'],
    summary:
      '衣服画像とカスタマイズの方向性を入力すると、素材の制約を考慮した案・完成予想図・段階的な制作手順を自動生成。複数LLMのパイプラインとして設計・実装した。IPSJ INTERACTION 2026 で上位入選。',
    blocks: [
      {
        heading: '概要',
        body: '衣服の画像とカスタマイズの方向性を示すテキストを入力すると、素材等の制約を考慮したカスタマイズ案・完成予想図・段階的な制作手順を自動生成するWebシステム。複数のLLMを組み合わせたパイプラインとして設計・実装した。システムとの対話を通じてデザインを修正できる仕様を実装しており、初心者が主体的にデザインを作り上げられる環境を構築した。',
      },
      {
        heading: '背景・動機',
        body: '衣服カスタマイズはもともと自分の趣味だった。「作りたいイメージはあるのに、素材ごとの加工の可否や具体的な制作手順がわからない」という壁を自分自身も経験してきたことが、この研究テーマを選んだ直接の動機だ。どんな人でも衣服カスタマイズに気軽に取り組めるようになれば、服に対して能動的になり、例えば服屋で服を見るときもカスタマイズの視点を持って楽しめるようになるのではないかという思いも重なった。',
      },
      {
        heading: '特に注力したこと',
        body: 'ユーザーの実際の声を起点に開発を進めることを大切にした。専門家インタビューと2回のユーザースタディを実施し、参加者の発話を文字起こしした上でテーマ分析を行い、思い込みを排して課題や効果を抽出することを心がけた。初回のユーザースタディでは「一度出た提案を修正したくても手段がない」という課題が浮かび上がったため、対話型の修正機能を追加実装した。作って終わりにせず、ユーザーの実際の使用場面から課題を発見してシステムに反映するサイクルを繰り返した。',
      },
      {
        heading: '成果',
        body: 'IPSJ INTERACTION 2026 に採択・発表され、会場での一般投票において上位入選。',
      },
      {
        heading: '今後の展望',
        body: '生地用の3Dプリンターを活用した制作工程の自動化、ファッショントレンドや素材特性といったドメイン知識をLLMに組み込む手法の探求、審美的な判断を生成AIで実現するアプローチの研究。',
      },
    ],
    links: [
      { label: '公開URL', url: 'https://furugi-arrange.vercel.app/' },
      {
        label: 'デモ動画',
        url: 'https://drive.google.com/file/d/17QG3zszXMdqs28_rrNa2AtFWDW12BXlq/view?usp=sharing',
      },
      // IPSJ INTERACTION 2026 提出論文（PDF）— 詳細ページのいちばん下に表示
      { label: 'IPSJ提出論文', url: 'https://www.interaction-ipsj.org/proceedings/2026/data/pdf/3B40.pdf' },
    ],
  },
  {
    slug: 'exchange-app-dev',
    title: '交換留学中のアプリ開発',
    subtitle: 'チーム開発（交換留学中）',
    kind: 'チーム開発',
    org: 'University of British Columbia',
    period: '2023年9月 〜 2024年5月',
    stack: ['JavaScript', 'Azure', 'Static Web Apps', 'Container Apps'],
    image: '/images/coding_while_exchage.png',
    tags: ['tech'],
    summary:
      '交換留学中に多様な母語を持つ現地学生と、2つのWebアプリを共同開発。会話をLLMで自動要約するチャットアプリと、複数言語の音声入力に対応した日記アプリを手がけた。',
    blocks: [
      {
        heading: '概要',
        body: '交換留学中、多様な母語を持つ現地学生とのチームで2つのWebアプリを共同開発した。異なる言語・文化的背景を持つメンバーと協働しながら、LLMの活用や多言語対応といったテーマに取り組んだ。',
      },
      {
        heading: 'LLM活用 Webチャットアプリ',
        body: '現地学生とLLMを活用したWebチャットアプリを共同開発した。会話内容をLLMで自動要約・表示する機能を設計し、主にフロントエンドの実装を担当した。要約情報をUIに自然に組み込むための表示方法を工夫し、ツールチップ形式での実装を採用した。',
      },
      {
        heading: '多言語対応 音声日記アプリ',
        body: '多様な母語を持つ学生と、複数言語の音声入力から日記記録ができるアプリを共同開発した。それぞれが自分の言語で気軽に記録を残せる体験を目指した。',
      },
    ],
  },
  {
    slug: 'emotion-transcription',
    title: '感情付き音声文字起こしシステム',
    subtitle: 'チーム開発（大学授業）',
    kind: 'チーム開発',
    org: '人工知能の演習',
    stack: ['Python', 'PyTorch', 'BERT'],
    image: '/images/emotion_recognition.png',
    tags: ['tech'],
    summary:
      '音声の文字起こし時に感情も分析し、テキスト末尾に絵文字を付与するシステム。テキストと音響特徴量の感情を融合させ、BERTのファインチューニングで分類部分を担当した。',
    blocks: [
      {
        heading: '概要・役割',
        body: '音声の文字起こし時に感情も分析し、テキストの後ろに絵文字を付与するシステムを開発した。テキスト情報と音響特徴量それぞれから得られる感情を融合させるアプローチで、BERTモデルをファインチューニングして感情を分類・抽出する部分を担当した。',
      },
    ],
  },
  {
    slug: 'restaurant-visualization',
    title: '飲食店開業・閉業情報の可視化システム',
    subtitle: 'チーム開発（大学授業）',
    kind: 'チーム開発',
    org: '情報可視化の演習',
    stack: ['情報可視化系ライブラリ'],
    image: '/images/restaurant_openandclose.png',
    tags: ['tech'],
    summary:
      '東京都内の飲食店の開業・閉業情報を年月ごとに可視化。エリアや時期ごとの傾向を直感的に把握できる形で表現した。',
  },
  {
    slug: 'smile-filter',
    title: 'オンラインミーティング用 笑顔変換フィルター',
    subtitle: '個人開発',
    kind: '個人開発',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    image: '/images/smilefilter.png',
    tags: ['tech'],
    summary:
      '発表時に画面端に映る自身の表情が気になるという実体験から、オンラインMTG中に聞き手の顔を笑顔に変換するフィルターを作成した。',
    blocks: [
      {
        heading: '概要・背景',
        body: '発表時に画面端に映る自身の表情が気になるという実体験から発想し、オンラインミーティング中に聞き手の顔を笑顔に変換するフィルターを作成した。作りたいものを自分の手で形にするというアプローチを一貫して取ってきた。',
      },
    ],
  },
  {
    slug: 'korean-vocab-test',
    title: '韓国語学習 単語テスト自動生成システム',
    subtitle: '個人開発',
    kind: '個人開発',
    stack: ['Python'],
    image: '/images/koreanquiz.png',
    tags: ['tech'],
    summary:
      '韓国語学習に没頭していた時期に、習熟度に合わせた単語テストを自動生成するシステムを開発した。',
  },
  {
    slug: 'todai-ryugaku-gogo',
    title: '東大留学GoGo 運営メンバー',
    subtitle: '留学を目指す学生への情報発信・イベント運営（課外活動）',
    kind: '課外活動',
    org: '東大留学GoGo',
    period: '2023年8月 〜 2024年8月',
    image: '/images/ryuugaku_gogo.png',
    tags: ['business'],
    summary:
      '海外留学・交換留学を目指す学生に向けた情報提供・発信や、留学を身近に感じられるイベントの企画・運営を担当した。',
    blocks: [
      {
        heading: '概要・役割',
        body: '海外留学・交換留学を目指す学生に向けて、留学に関する情報提供・発信を行う運営メンバーとして活動した。留学を身近に感じてもらえるようなイベントの企画・運営も担当し、自身の留学経験も踏まえて学生の挑戦を後押しした。',
      },
    ],
  },
]
