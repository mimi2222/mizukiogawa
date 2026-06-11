import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Experience } from './pages/Experience'
import { Beyond } from './pages/Beyond'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export default function App() {
  // base path（vite.config.ts の base）と BrowserRouter の basename を連動させる。
  // 末尾スラッシュを除いて basename に渡す（'/' のときは undefined 相当）。
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="experience" element={<Experience />} />
          <Route path="beyond" element={<Beyond />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
