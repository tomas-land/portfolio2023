"use client"

import s from "@styles/components/about.module.scss"
import Image from "next/image"
import foto from "/public/images/face-foto-animated.png"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import variants from "@/lib/framer_motion/variants"



const About = () => {
  const wrapperAbout = useRef(null)
  const isInViewWrapperAbout = useInView(wrapperAbout)

  return (
    <section id="about" className={s.about}>
      <motion.div className={s.wrapper} ref={wrapperAbout}
        variants={variants.bottom_to_top_Variants}
        initial="hide"
        animate={isInViewWrapperAbout ? "show" : "hide"}>
        <Image className={s.foto} src={foto} alt="foto" width={100} />
        <div className={s.content}>
          <h2 className={s.title}>ABOUT ME</h2>
          <div className={s.underline}></div>
          <p className={s.text}>My coding journey commenced nearly two years ago at <a href='https://bit.lt/'><b>Baltic Institute of Technology</b></a>. In the initial six months, I acquired a solid foundation in web development, working on projects using PHP, Laravel framework, and MySQL. However, in my pursuit of continuous learning and to face new challenges, I recently transitioned to the React and Next.js frameworks.
            <br />
            <br />
            My passion lies in crafting designs and developing user-friendly interfaces, which is why I aspire to specialize as a front-end developer. Simultaneously, my curiosity extends to understanding back-end logic, APIs, and relational databases, making me well-rounded in the world of full-stack development.
            <br />
            <br />
            As an individual, I am characterized by friendliness, adaptability, determination, and enthusiasm. I am currently seeking a role that presents challenges in a dynamic environment, enabling me to apply my skills and knowledge to devise innovative solutions.</p>
        </div>
      </motion.div>
      <a className={s.scroll_down_btn} href="#skills" ><span></span></a>
    </section >
  )
}

export default About