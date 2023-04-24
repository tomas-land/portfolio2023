"use client"

import { FormEvent, useState } from "react"
import s from "@styles/components/contact.module.scss"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section id="contact" className={s.contact}>
      <div className={s.wrapper}>
        <div className={s.title}>CONTACT ME</div>
        <form onSubmit={handleSubmit}>
          <div className={s.inputs}>
            <input className={s.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={s.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className={s.message} maxLength={800} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className={s.submit_btn} type="submit">SEND</button>
          </div>
        </form>
      </div >
    </section >
  )
}

export default Contact