import { useInView } from '../hooks/useInView'
import { data } from '../data'
import './Projects.css'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={`projects ${inView ? 'projects--visible' : ''}`} ref={ref}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>

        <div className="projects__grid">
          {data.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="proj-card"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="proj-card__top">
        <div className="proj-card__header">
          <div className="proj-card__folder">
            <FolderIcon />
          </div>
          <div className="proj-card__links">
            {/* placeholder links */}
            <span className="proj-card__link-icon" title="GitHub">
              <LinkIcon />
            </span>
          </div>
        </div>

        <h3 className="proj-card__name">{project.name}</h3>
        <p className="proj-card__subtitle">{project.subtitle}</p>
        <p className="proj-card__desc">{project.description}</p>
      </div>

      <div className="proj-card__bottom">
        <ul className="proj-card__highlights">
          {project.highlights.map(h => (
            <li key={h} className="proj-card__highlight">
              <span className="proj-card__highlight-dot" />
              {h}
            </li>
          ))}
        </ul>

        <div className="proj-card__tech">
          {project.tech.map(t => (
            <span key={t} className="proj-card__tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
