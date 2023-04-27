"use client"

import { FormEvent, useState, useEffect } from "react"
import s from "@styles/components/contact.module.scss"
import validateFormData from "@/lib/helpers/validate_form"
import { iFormErrors } from "@/lib/interfaces"


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<iFormErrors>({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)

  useEffect(() => {
    if (isSubmitted) setErrors(validateFormData({ name, email, message }))
  }, [name, email, message, isSubmitted])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (Object.keys(errors).length > 0) return;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
      if (res.status === 200) setIsMessageSent(true)
    } catch (error) {
      console.log(error)
    }
    return
  }

  return (
    <section id="contact" className={s.contact}>
      <div className={s.title}>CONTACT ME</div>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={s.inputs}>
            <input className={s.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className={s.errors}>{errors.name}</div>
            <input className={s.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className={s.errors}>{errors.email}</div>
            <textarea className={s.message} maxLength={800} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className={s.errors}>{errors.message}</div>
            {/* <button className={s.submit_btn} type="submit">SEND</button> */}
            {isMessageSent ? <div className={s.message_sent}>Thank you!</div> : <button className={s.submit_btn} type="submit">SEND</button>}
          </div>
        </form>
      </div >
    </section >
  )
}

export default Contact