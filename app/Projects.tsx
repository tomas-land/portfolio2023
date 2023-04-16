"use client"

import s from "@styles/components/projects.module.scss"
import { FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsGit } from 'react-icons/bs'
import { SiTypescript, SiPrisma } from 'react-icons/si'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from "next/image"
import Link from "next/link"
import image1 from "../public/images/foto1.jpeg"
import image2 from "../public/images/foto2.jpeg"

const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      <h1 className={s.title}>PROJECTS</h1>
      <div className={s.wrapper}>
        <div className={s.card}>
          <div className={s.slider}>
            <Splide
              options={{
                type: 'fade',
                perMove: 1,
                rewind: true,
                arrows: false,
                autoplay: true,
                pagination: false,
                interval: 3000,
                speed: 5000,
                height: 600,
                pauseOnHover: false,
                breakpoints: {
                  768: {
                    height: 300,
                  }
                }
              }}
              aria-label="My Favorite Images">
              <SplideSlide >
                <Image src={image1} className={s.image} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <Image src={image2} className={s.image} alt="Image 2" />
              </SplideSlide>
            </Splide>
          </div>
          <div className={s.content}>
            <h2 className={s.name}>Expenses Tracker</h2>
            <h4 className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut itaque sequi ipsa voluptates a accusamus id nisi aspernatur. Fuga quod impedit iusto quasi numquam illo nam fugiat vero perferendis.</h4>
            <div className={s.features}>
              <h4 className={s.feat_title}>Features</h4>
              <ul>
                <li>User can see latest expenses for current month</li>
                <li>User can create, assign to category and delete expenses</li>
                <li>Previuos month expenses can be compared with current </li>
                <li>Current month expenses are shown in chart</li>
              </ul>
            </div>
            <div className={s.technologies}>
              <h4 className={s.tech_title}>Technologies</h4>
              <div className={s.icons}>
                <SiNextdotjs size={30} />
                <FaReact size={30} />
                <SiTypescript size={30} />
                <FaSass size={30} />
                <SiPrisma size={30} />
              </div>
            </div>
            <div className={s.btns}>
              <Link href="https://expenses-tracker-self.vercel.app" target="_blank" rel="noopener noreferrer" className={s.btn}>PREVIEW</Link>
              <Link href="https://github.com/tomas-land/portfolio2023" target="_blank" rel="noopener noreferrer" className={s.btn}>CODE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects