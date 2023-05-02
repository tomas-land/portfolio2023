"use client"

import { useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { useInView,useAnimate } from "framer-motion"
// import variants from '@/lib/framer_motion/variants'
import s from "@styles/components/hero.module.scss"
import { SocialIcon } from 'react-social-icons';
import nav_list from "@/lib/data/nav_list";


const Hero = () => {
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const isInViewName = useInView(nameRef)
  const isInViewTitle = useInView(titleRef)
  // useEffect(() => {
  //   // isInViewName && isInViewTitle ?  animate(nameRef.current, { x: 0, opacity: 1, transition: { duration: 2 } }) : animate(nameRef.current, { x: 100, opacity: 0, transition: { duration: 2 } })

  // })
  const nameVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
      },
    },
  };
  const titleVariants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <section id="hero" className={s.hero}>
      <div className={s.version}>v2.0</div>
      <div className={s.social_icons}>
        <SocialIcon url="https://facebook.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
        <SocialIcon url="https://github.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
        <SocialIcon url="https://linkedin.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#777777' />
      </div>
      <motion.div className={s.name} ref={nameRef} animate={isInViewName ? "show" : "hide"} variants={nameVariants} >TOMAS LANDA</motion.div>
      <motion.div className={s.title} ref={titleRef} animate={isInViewTitle ? "show" : "hide"} variants={titleVariants}>
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
      <a className={s.scroll_down_btn} href="#about" ><span></span></a>
    </section>
  )
}

export default Hero