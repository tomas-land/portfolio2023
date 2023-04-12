import styles from '@styles/pages/page.module.scss'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  )
}
