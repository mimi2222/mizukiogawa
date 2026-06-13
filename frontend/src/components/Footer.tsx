import { contactLinks } from '../data/profile'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <nav className="footer__links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={link.icon ? 'footer__icon-link' : undefined}
            >
              {link.icon ? <BrandIcon name={link.icon} /> : link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
