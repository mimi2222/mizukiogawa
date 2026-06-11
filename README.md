# 小川美杉 ポートフォリオ

React + Vite + TypeScript で作成した個人ポートフォリオサイト。Vercel で公開します。

## 技術スタック

- **React 19** + **TypeScript**
- **Vite 6**（ビルド・開発サーバー）
- **React Router 7**（複数ページのルーティング）
- アニメーションは `IntersectionObserver` + CSS のみ（外部ライブラリ非依存・軽量）

## ディレクトリ構成

```
portfolio/
├── frontend/                 # フロントエンド一式（将来 backend/ を並べられる構成）
│   ├── index.html
│   ├── vite.config.ts        # Vite 設定（base path 等）
│   ├── vercel.json           # Vercel: SPA ルーティングのフォールバック
│   ├── public/               # 静的アセット（favicon 等）
│   └── src/
│       ├── App.tsx           # ルーティング定義
│       ├── pages/            # ★ URLパスと1:1で対応するページ
│       │   ├── Home.tsx          # /
│       │   ├── About.tsx         # /about
│       │   ├── Projects.tsx      # /projects
│       │   ├── ProjectDetail.tsx # /projects/:slug
│       │   ├── Experience.tsx    # /experience
│       │   ├── Beyond.tsx        # /beyond
│       │   └── Contact.tsx       # /contact
│       ├── components/       # 再利用するUI部品
│       ├── data/             # ★ 文章・実績データ（編集はここが中心）
│       ├── hooks/
│       └── styles/global.css # 色・余白・フォントは :root 変数で一元管理
└── README.md
```

## ローカルで動かす

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## ビルド

```bash
cd frontend
npm run build    # dist/ に出力
npm run preview  # 本番ビルドの確認
```

## 内容の編集

文章や実績の修正は基本的に `frontend/src/data/` だけ触ればOKです。

| ファイル | 内容 |
|---|---|
| `data/profile.ts` | 名前・肩書・自己紹介・キャリアビジョン・**連絡先** |
| `data/skills.ts` | スキル一覧 |
| `data/projects.ts` | 開発・研究実績（`/projects/:slug` に連動） |
| `data/experience.ts` | インターン・課外活動の経歴 |
| `data/beyond.ts` | 挑戦してきたこと |

## Vercel へのデプロイ

1. このリポジトリを GitHub に push する。
2. [Vercel](https://vercel.com/) で **Add New → Project** からこのリポジトリを import する。
3. **Root Directory を `frontend` に設定**する（重要）。Framework Preset は Vite が自動検出される。
   - Build Command: `npm run build`（自動）
   - Output Directory: `dist`（自動）
4. Deploy を押すと公開完了。以降は `main` への push で自動デプロイ、PR ごとにプレビュー環境も生成される。

> Vercel は静的ファイルを配信しつつ、`frontend/vercel.json` の `rewrites` で
> `/about` などの直リンク・リロードを `index.html` に向けるため、
> クライアントサイドルーティングが正しく動作します（`base` は `'/'` のままでOK）。

### 独自ドメインを使う場合

Vercel のプロジェクト設定 → **Domains** から追加できます。`base` の変更は不要です。
