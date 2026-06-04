import { useInView } from '../hooks/useInView'
import { data } from '../data'
import './Skills.css'

const categoryColors = {
  Languages: '#e8ff47',
  Frontend: '#7dd3fc',
  Backend: '#86efac',
  Databases: '#f9a8d4',
  Tools: '#c4b5fd',
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={`skills ${inView ? 'skills--visible' : ''}`} ref={ref}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Stack</h2>

        <div className="skills__grid">
          {Object.entries(data.skills).map(([category, items], i) => (
            <div
              key={category}
              className="skills__category"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="skills__category-header"
                style={{ '--cat-color': categoryColors[category] || '#e8ff47' }}
              >
                <span className="skills__category-dot" />
                <span className="skills__category-name">{category}</span>
              </div>
              <div className="skills__tags">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="skills__tag"
                    style={{ '--cat-color': categoryColors[category] || '#e8ff47' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
