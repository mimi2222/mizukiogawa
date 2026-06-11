import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel はルート（または独自ドメイン）で配信するため base は '/' のままでOK。
// クライアントサイドルーティングのフォールバック（/about などの直リンク）は
// vercel.json の rewrites で index.html に向けることで対応している。
export default defineConfig({
  base: '/',
  plugins: [react()],
})
