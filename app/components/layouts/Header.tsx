"use client"

import s from '@styles/layuots/header.module.scss'
import { SocialIcon } from 'react-social-icons';
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import nav_list from '@/lib/data';


const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className={s.header}>
        <Hamburger size={30} color={isOpen ? '#363636' : '#777777'} toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen &&
        <nav className={s.mobile_nav}>
          <ul className={s.nav_items}>
            {nav_list.map((item) => (
              <li className={s.nav_item} key={item.name} onClick={() => setOpen(false)}><a href={item.path}>{item.name}</a></li>
            ))}
          </ul>
        </nav>}
    </>

  )
}

export default Header