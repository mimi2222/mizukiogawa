import { Link } from 'react-router-dom'
import { contactLinks, profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__roles">{profile.roles.join(' / ')}</p>
        </div>
        <nav className="footer__links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
