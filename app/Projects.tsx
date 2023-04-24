import s from "@styles/components/projects.module.scss"
import projects from "@/lib/data/projects"
import Project_Card from "./Project_Card"


const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      <h1 className={s.title}>PROJECTS</h1>
      <div className={s.wrapper}>
        {projects.map((project) => (
          <Project_Card project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Projects