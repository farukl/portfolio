import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">
          <span style={{ color: 'var(--accent)' }}>[</span>
          FL
          <span style={{ color: 'var(--accent)' }}>]</span>
        </span>
        <span className="footer__copy">
          Faruk Laçin © {new Date().getFullYear()} — Designed & built from scratch
        </span>
      </div>
    </footer>
  )
}
