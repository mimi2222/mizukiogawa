import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { NotFound } from './pages/NotFound'

export default function App() {
  // base path（vite.config.ts の base）と BrowserRouter の basename を連動させる。
  // 末尾スラッシュを除いて basename に渡す（'/' のときは undefined 相当）。
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          {/* About / Profile / Experience / Projects は 1 ページに縦並び */}
          <Route index element={<Home />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          {/* 旧ページ URL は 1 ページ構成の該当セクションへ集約 */}
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="profile" element={<Navigate to="/#profile" replace />} />
          <Route path="projects" element={<Navigate to="/#projects" replace />} />
          <Route path="experience" element={<Navigate to="/#experience" replace />} />
          <Route path="contact" element={<Navigate to="/" replace />} />
          <Route path="beyond" element={<Navigate to="/#projects" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
