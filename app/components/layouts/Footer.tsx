import s from '@styles/layuots/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link className={s.link_to_old_version} href="https://portfolio-v-1-black.vercel.app/" target="_blank" rel="noopener noreferrer">v1.0</Link>
      <h4 className={s.copyright}>© 2023 Created By Me</h4>
    </footer>
  )
}

export default Footer