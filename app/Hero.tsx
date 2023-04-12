import s from "@styles/components/hero.module.scss"
import { SocialIcon } from 'react-social-icons';
import nav_list from "@/lib/data";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.social_icons}>
        <SocialIcon url="https://facebook.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#504a4a' />
        <SocialIcon url="https://github.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#504a4a' />
        <SocialIcon url="https://linkedin.com" className={s.icon} target="_blank" rel="noopener noreferrer" bgColor='transparent' fgColor='#504a4a' />
      </div>
      <div className={s.name}>TOMAS LANDA</div>
      <div className={s.title}>
        <div className={s.part1}>WEB</div>
        <div className={s.part2}>DEVELOPER</div>
      </div>
      <div className={s.underline}></div>
      <nav className={s.nav}>
        <ul className={s.nav_items}>
          {nav_list.map((item) => (
            <li className={s.nav_item} key={item.name}><a href={item.path}>{item.name}</a></li>
          ))}
        </ul>
      </nav>
      <a className={s.scroll_down_btn} href="#about" ><span></span></a>
      {/* <div className={s.frame}>

      <Image src={foto} alt="foto" width={300} priority className={s.foto} />
      </div>
      <div className={s.intro}></div>

      Web-Developer */}
    </section>
  )
}

export default Hero