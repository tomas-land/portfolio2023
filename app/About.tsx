import s from "@styles/components/about.module.scss"
import Image from "next/image"
import foto from "/public/images/face-foto-animated.png"
import foto2 from "/public/images/face-foto-animated2.png"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.wrapper}>
        <Image className={s.foto} src={foto} alt="foto" width={100} />
        <div className={s.content}>
          <h2 className={s.title}>ABOUT ME</h2>
          <div className={s.underline}></div>
          <p className={s.text}>My coding journey started almost two years ago at <a href='https://bit.lt/'>BIT</a>. In about half a year I&apos;ve learned the basics of web developement and created few projects with PHP , Laravel framework and MySQL . But recently I changed my stack and migrated to React and Next JS framework to expand knowledge and challenge myself. My goal is to become front-end developer beacause I love creating designs and user friendly interfaces , but also I&apos;m curious about back-end logic, api&apos;s and relational databases. As a person I&apos;m friendly, adaptable, passionate, determined and enthusiastic. I seek a challenging role in a dynamic environment that allows me to utilize my skills and knowledge to create innovative solutions.      </p>
        </div>
      </div>
      <a className={s.scroll_down_btn} href="#skills" ><span></span></a>

    </section>
  )
}

export default About