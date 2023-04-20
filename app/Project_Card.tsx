"use client"

import s from "@styles/components/project_card.module.scss"
import { FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsGit } from 'react-icons/bs'
import { SiTypescript, SiPrisma } from 'react-icons/si'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image, { StaticImageData } from "next/image"
import Link from "next/link"


interface iProps {
  project: {
    name: string;
    description: string;
    images: StaticImageData[];
    features: string[];
    link_to_preview: string;
    link_to_github: string;
  }
}

const Project_Card = ({ project }: iProps) => {
  const { name, description, images, link_to_preview, link_to_github } = project;
  return (
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
          {images.map((image, index) => (
            <SplideSlide key={index} className="slide">
              <Image src={image} className={s.image} alt="Image 1" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className={s.content}>
        <h2 className={s.name}>{name}</h2>
        <h4 className={s.description}>{description}</h4>
        <div className={s.features}>
          <h4 className={s.feat_title}>Features</h4>
          <ul>
           {project.features.map((feature, index) => <li key={index}>{feature}</li>)}
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
          <Link href={link_to_preview} target="_blank" rel="noopener noreferrer" className={s.btn}>PREVIEW</Link>
          <Link href={link_to_github} target="_blank" rel="noopener noreferrer" className={s.btn}>CODE</Link>
        </div>
      </div>
    </div>
  )
}

export default Project_Card