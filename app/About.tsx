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
          <p className={s.text}>My coding journey started almost two years ago at <a href='https://bit.lt/'><b>Baltic Institute of Technology</b> </a>. In about half a year I&apos;ve learned the basics of web development and created few projects with PHP , Laravel framework and MySQL . But recently I changed my stack and migrated to React and Next JS framework to expand knowledge and challenge myself. My goal is to become front-end developer because I love creating designs and user friendly interfaces , but also curious about back-end logic, api&apos;s and relational databases. As a person I&apos;m friendly, adaptable, passionate, determined and enthusiastic. I seek a challenging role in a dynamic environment that allows me to utilize my skills and knowledge to create innovative solutions.      </p>
        </div>
      </motion.div>
      <a className={s.scroll_down_btn} href="#skills" ><span></span></a>
    </section >
  )
}

export default About