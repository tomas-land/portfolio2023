"use client"

import s from "@styles/components/project_card.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { IconType } from "react-icons/lib";
import Tech_Icon from "./components/Tech_Icon"


interface iProps {
  project: {
    name: string;
    description: string;
    images: StaticImageData[];
    features: string[];
    tech_stack: string[];
    link_to_preview: string;
    link_to_github: string;
  }
}

const Project_Card = ({ project }: iProps) => {
  const { name, description, images, features, tech_stack, link_to_preview, link_to_github } = project;
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
          }}>
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <Image src={image} className={s.image} alt="project_image" />
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
            {features.map((feature, index) => <li className={s.feature} key={index}>{feature}</li>)}
          </ul>
        </div>
        <div className={s.technologies}>
          <h4 className={s.tech_title}>Technologies</h4>
          <div className={s.tech_icons}>
            {tech_stack.map((icon_name: string) => <div key={icon_name}><Tech_Icon icon_name={icon_name} /></div>)}
          </div>
        </div>
        <div className={s.btns}>
          <Link href={link_to_preview} target="_blank" rel="noopener noreferrer" className={s.btn_preview}></Link>
          <Link href={link_to_github} target="_blank" rel="noopener noreferrer" className={s.btn_code}></Link>
        </div>
      </div>
    </div>
  )
}

export default Project_Card