"use client"

import { FormEvent, useState, useEffect } from "react"
import s from "@styles/components/contact.module.scss"
import validateFormData from "@/lib/helpers/validate_form"
import { iFormErrors } from "@/lib/interfaces"
import capitalizeFistLetter from "@/lib/helpers/capitalize_first_letter"


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<iFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    const validation_errors = validateFormData({ name, email, message })
    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.status === 200) console.log(res);
    } catch (error) {
      console.log("error sending to api/contact", error);
    }
  }
  useEffect(() => {
    if (isSubmitted) setErrors(validateFormData({ name, email, message }))
  }, [name, email, message, isSubmitted])

  useEffect(() => {
    setMessage(capitalizeFistLetter(message))
  }, [message])

  return (
    <section id="contact" className={s.contact}>
      <div className={s.title}>CONTACT ME</div>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={s.inputs}>
            <input className={s.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className={s.errors}>{errors.name}</div>
            <input className={s.input} type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className={s.errors}>{errors.email}</div>
            <textarea className={s.message} maxLength={800} placeholder="Message" value={message} autoCorrect="off" onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className={s.errors}>{errors.message}</div>
          </div>
            {isMessageSent ? <div className={s.message_sent}>Thank you!</div> : <button className={s.btn_submit} type="submit"></button>}
        </form>
      </div >
    </section >
  )
}

export default Contact