import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { contactLinks } from '../data/profile'

export function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title="お問い合わせ"
      intro="お仕事のご相談・ご連絡はこちらから。お気軽にどうぞ。"
    >
      <div className="grid grid--contact">
        {contactLinks.map((link, i) => (
          <Reveal key={link.label} as="div" delay={i * 70}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card contact-card"
            >
              <span className="contact-card__label">{link.label}</span>
              <span className="contact-card__value">{link.value}</span>
              <span className="contact-card__arrow">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
