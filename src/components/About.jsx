import { useInView } from '../hooks/useInView'
import { data } from '../data'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`container about__inner ${inView ? 'about--visible' : ''}`}>
        <div className="about__left">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="about__text">{data.about}</p>
          <div className="about__edu-card">
            <div className="about__edu-icon">🎓</div>
            <div>
              <div className="about__edu-school">{data.education.school}</div>
              <div className="about__edu-degree">{data.education.degree}</div>
              <div className="about__edu-period">{data.education.period}</div>
            </div>
          </div>
        </div>

        <div className="about__right">
          <div className="about__stats">
            {[
              { value: '2+', label: 'Years building' },
              { value: '2', label: 'Companies shipped' },
              { value: '10+', label: 'Technologies' },
            ].map(({ value, label }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="about__focus-list">
            {[
              'Full-stack feature development',
              'Distributed system design',
              'API & backend architecture',
              'Design-to-code implementation',
            ].map(item => (
              <div key={item} className="about__focus-item">
                <span className="about__focus-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
