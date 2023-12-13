"use client"

import { useRef, useEffect } from "react";
import { animate, delay, motion } from "framer-motion";
import { useInView, useAnimate } from "framer-motion"
import variants from '@/lib/framer_motion/variants'
import s from "@styles/components/hero.module.scss"
import { SocialIcon } from 'react-social-icons';
import nav_list from "@/lib/data/nav_list";


const Hero = () => {
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const isInViewName = useInView(nameRef)
  const isInViewTitle = useInView(titleRef)

  return (
    <section id="hero" className={s.hero}>
      <motion.div className={s.circle}
        initial="hide" animate="show" variants={variants.circleHeroVariant}
      ></motion.div>
      <div className={s.content_wrapper}>
        <h2 className={s.version}>v2.0</h2>
        <div className={s.social_icons}>
          <SocialIcon url="https://www.facebook.com/tomas.landa.712/" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
          <SocialIcon url="https://github.com/tomas-land" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
          <SocialIcon url="https://www.linkedin.com/in/tomas-landa-424534220/" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
        </div>
        <motion.div className={s.name} ref={nameRef} initial="hide" animate={isInViewName ? "show" : "hide"} variants={variants.left_to_right_Variants} >TOMAS LANDA</motion.div>
        <motion.div className={s.title} ref={titleRef} initial="hide" animate={isInViewTitle ? "show" : "hide"} variants={variants.right_to_left_Variants}>
          <div className={s.part1}>WEB</div>
          <div className={s.part2}>DEVELOPER</div>
        </motion.div>
        <div className={s.underline}></div>
        <nav className={s.nav}>
          <ul className={s.nav_items}>
            {nav_list.map((item) => (
              <li key={item.name}><a className={s.nav_item} href={item.path}>{item.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <a className={s.scroll_down_btn} href="#about" ><span></span></a>
    </section>
  )
}

export default Hero