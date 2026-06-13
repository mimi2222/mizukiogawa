import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// 1ページ構成のセクションへスクロールするナビ（上から並ぶ順）。
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // トップページ内では同一ページ内スクロール。詳細ページからは / へ遷移し、
  // ハッシュ経由でスクロール（Layout の ScrollManager が処理）。
  const handleNav = (e: React.MouseEvent, id: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <button
          type="button"
          className="header__toggle"
          aria-label="メニューを開閉"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`header__toggle-bar ${menuOpen ? 'is-open' : ''}`} />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className="header__link"
              onClick={(e) => handleNav(e, item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
