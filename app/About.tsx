import s from "@styles/components/about.module.scss"
import Image from "next/image"
import foto from "/public/images/face-foto-animated.png"
import foto2 from "/public/images/face-foto-animated2.png"

const About = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.wrapper}>
        <Image className={s.foto} src={foto} alt="foto" width={100} />
        <div className={s.content}>
          <h2 className={s.title}>ABOUT ME</h2>
          <div className={s.underline}></div>
          <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae magnam corrupti neque ipsam a incidunt dicta sunt? Cupiditate quo amet ad tenetur quasi neque recusandae culpa repudiandae excepturi error adipisci omnis ullam, quisquam magnam cum earum. Reiciendis neque aut quos! At architecto neque, sapiente voluptates eius molestiae repellat. Hic?</p>
        </div>
      </div>
      <a className={s.scroll_down_btn} href="#hero" ><span></span></a>

    </section>
  )
}

export default About