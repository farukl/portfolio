import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = links.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">[</span>
          FL
          <span className="navbar__logo-bracket">]</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link ${active === href.replace('#', '') ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}FarukCV.pdf`}
              download
              className="navbar__cta"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
