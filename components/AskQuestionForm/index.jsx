
// import { createOrderAction } from "@/server/BL/actions/order.action"
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import style from "./style.module.scss"
import { createQuestionAction } from './askAction'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { SiTheconversation } from "react-icons/si";
import Text from '../TextComponent'

export default function AskActionForm() {
  const [state, formAction] = useFormState(createQuestionAction)
  const { pending } = useFormStatus()
  const formRef = useRef(null)
  const [contactMethod, setContactMethod] = useState('email')
  const [contactDetails, setContactDetails] = useState('')
  const [message, setMessage] = useState(null)



  useEffect(() => {
    if (state?.success) {
      console.log(state.question)
      setMessage(state.message);
      if (formRef.current) {
        formRef.current.reset()
        setContactDetails("")
        setContactMethod("email")
      }
      setTimeout(()=>{
        setMessage(null);
      }, 3000)
    }
  }, [state])


  const handleContactMethodChange = (e) => {
    setContactMethod(prev=>{
      if(prev==="email" &&  e.target.value ===("sms"||"whatsapp")||
      prev===("sms"||"whatsapp")&&  e.target.value === "email"){
        setContactDetails("")
      }
      return e.target.value  })
  }

  return (
    <div className={style.container}>

      <Text as="h3" textColor="white" fontStyle="b">
      <SiTheconversation size={40} style={{paddingLeft: "4px"}}/>
      {`  כתיבת שאלה לרב   `}
      </Text>

      <form ref={formRef} action={formAction} className={style.form}>  
        <div className={style.formGroup}>
        <label className={style.label}>
          <Text as="h5" textColor="white" fontStyle="b">כותרת</Text>
          </label>
        <input
            type="text"
            name='header'
            placeholder="נסה לנסח את השאלה במשפט אחד"
            className={style.input}
            minLength={10}
            pattern="^[\u0590-\u05FF\s]*$"
            title="אנא הכנס כותרת בעברית בלבד"
            
            />
          </div>
          <div className={style.formGroup}>
          <label className={style.label}>
          <Text as="h5" textColor="white" fontStyle="b">*תוכן השאלה</Text>
          </label>
          <textarea
            name='question'
            placeholder="הכנס שאלה באורך של 20 תווים ומעלה"
            className={style.textarea}
            minLength={20}
            required
          />
        </div>
        <div className={style.formGroup}>
        <label className={style.label}>
          <Text as="h5" textColor="white" fontStyle="b">

            * בחר את אופן קבלת המענה 
          </Text>
          </label>

          <div className={style.formGroup}>
           <input
            type={contactMethod === 'email' ? 'email' : 'tel'}
            pattern={contactMethod === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' : '^\\d{10}$'}
            title={contactMethod === 'email' ? 'אנא הכנס כתובת אימייל תקינה' : 'אנא הכנס מספר טלפון בעל 10 ספרות בדיוק'}
            minLength={contactMethod === 'email' ? 0 : 10}
            maxLength={contactMethod === 'email' ? 50 : 10}
            name={contactMethod === 'email' ? 'email' : 'phone'}
            placeholder={contactMethod === 'email' ? 'הכנס את האימייל שלך' : 'הכנס את מספר הטלפון שלך'}
            className={style.input}
            value={contactDetails}
            style={{direction: "ltr"}}
            onChange={(e) => setContactDetails(e.target.value)}
            required
          />
           <input
            name="contactMethod"
            value={contactMethod}
            type="hidden"
            required
          />
        </div>

         <div className={style.contactOptions}>
           <label className={style.label}>
            <input
                type="radio"
                name="contactOption"
                value="email"
                className={style.radio}
                checked={contactMethod === 'email'}
                onChange={handleContactMethodChange}
              />
            
          <Text as="h5" textColor="white" fontStyle="b">
               Email
          </Text>
            </label>

            <label className={style.label}>
              <input
                type="radio"
                name="contactOption"
                value="sms"
                checked={contactMethod === 'sms'}
                onChange={handleContactMethodChange}
                className={style.radio}
              />
          <Text as="h5" textColor="white" fontStyle="b">
               SMS
          </Text>
            </label>
            <label className={style.label}>
              <input
                type="radio"
                name="contactOption"
                value="whatsapp"
                className={style.radio}
                checked={contactMethod === 'whatsapp'}
                onChange={handleContactMethodChange}
              />
            <Text as="h5" textColor="white" fontStyle="b">
              WhatsApp
            </Text>
            </label>
          </div>     
          </div>

        <div>
        {message ? <span className={style.message}><Text as="h4" textColor="white" fontStyle="b">{message}</Text></span>:
        <SubmitButton text={"שלח"} 
        // onPendingText={"שולח..."}
        />}
          
        </div>
      </form>


      
    </div>
  )
}

