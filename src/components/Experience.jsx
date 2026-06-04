import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { data } from '../data'
import './Experience.css'

export default function Experience() {
  const [ref, inView] = useInView()
  const [activeIdx, setActiveIdx] = useState(0)

  const exp = data.experience[activeIdx]

  return (
    <section id="experience" className={`experience ${inView ? 'experience--visible' : ''}`} ref={ref}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've Worked</h2>

        <div className="exp__layout">
          {/* Tab selector */}
          <div className="exp__tabs">
            {data.experience.map((e, i) => (
              <button
                key={e.company}
                className={`exp__tab ${activeIdx === i ? 'exp__tab--active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="exp__tab-company">{e.company}</span>
                <span className="exp__tab-period">{e.period}</span>
                {e.current && <span className="exp__tab-badge">Now</span>}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="exp__panel" key={activeIdx}>
            <div className="exp__panel-header">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <div className="exp__company-line">
                  <span className="exp__company">{exp.company}</span>
                  <span className="exp__dot">·</span>
                  <span className="exp__location">{exp.location}</span>
                </div>
                <div className="exp__period">{exp.period}</div>
              </div>
              {exp.current && (
                <span className="exp__current-badge">
                  <span className="exp__current-dot" />
                  Current
                </span>
              )}
            </div>

            <ul className="exp__items">
              {exp.items.map((item, i) => (
                <li
                  key={i}
                  className="exp__item"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <span className="exp__item-arrow">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="exp__tech-row">
              {exp.tech.map(t => (
                <span key={t} className="exp__tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
