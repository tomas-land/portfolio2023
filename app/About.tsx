"use client"

import s from "@styles/components/about.module.scss"
import Image from "next/image"
import foto from "/public/images/face-foto-animated.png"
import { useRef } from "react"
import { motion } from "framer-motion"



const About = () => {

  return (
    <motion.section  id="about" className={s.about}
    initial={false} animate={{ opacity: 1 }}
    transition={{ duration: 4 }}
   
    >
      <div className={s.wrapper}>
        <Image className={s.foto} src={foto} alt="foto" width={100} />
        <motion.div className={s.content}
          // initial={{ y: 100, opacity: 0 }}
          // transition={{ type: "spring", duration: 2 }}
        >


          <h2 className={s.title}>ABOUT ME</h2>
          <div className={s.underline}></div>
          <p className={s.text}>My coding journey started almost two years ago at <a href='https://bit.lt/'>BIT</a>. In about half a year I&apos;ve learned the basics of web developement and created few projects with PHP , Laravel framework and MySQL . But recently I changed my stack and migrated to React and Next JS framework to expand knowledge and challenge myself. My goal is to become front-end developer beacause I love creating designs and user friendly interfaces , but also curious about back-end logic, api&apos;s and relational databases. As a person I&apos;m friendly, adaptable, passionate, determined and enthusiastic. I seek a challenging role in a dynamic environment that allows me to utilize my skills and knowledge to create innovative solutions.      </p>
        </motion.div>
      </div>
      <a className={s.scroll_down_btn} href="#skills" ><span></span></a>

    </motion.section >
  )
}

export default About