import s from "@styles/components/skills.module.scss"
import { FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsGit } from 'react-icons/bs'
import { SiTypescript, SiPrisma } from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills" className={s.skills}>
      <h2 className={s.title}>SKILLS</h2>
      <div className={s.underline}></div>
      <div className={s.icons}>
        <div className={s.icon}><BsGit size={30} /><div className={s.tech_name}>GIT</div></div>
        <div className={s.icon}><SiNextdotjs size={30} /><div className={s.tech_name}>NEXT</div></div>
        <div className={s.icon}><FaReact size={30} /><div className={s.tech_name}>REACT</div></div>
        <div className={s.icon}><GrMysql size={30} /><div className={s.tech_name}>MYSQL</div></div>
        <div className={s.icon}><SiTypescript size={30} /><div className={s.tech_name}>TS</div></div>
        <div className={s.icon}><FaSass size={30} /><div className={s.tech_name}>SASS</div></div>
        <div className={s.icon}><SiPrisma size={30} /><div className={s.tech_name}>PRISMA</div></div>
      </div>
      <a className={s.scroll_down_btn} href="#projects" ><span></span></a>
    </section>
  )
}

export default Skills