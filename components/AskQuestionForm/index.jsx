
// import { createOrderAction } from "@/server/BL/actions/order.action"
"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import styles from "./style.module.scss"
import { createQuestionAction } from '../../actions/askQuestionAction'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { SiTheconversation } from "react-icons/si";
import Text from '../TextComponent'
import ReCAPTCHA from "react-google-recaptcha";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function AskActionForm() {
  const [state, formAction] = useFormState(createQuestionAction)
  const formRef = useRef(null)
  const [contactMethod, setContactMethod] = useState('email')
  const [contactDetails, setContactDetails] = useState('')
  const [message, setMessage] = useState(null)
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(true);

//  מטפל בתגובה לשליחת הטופס
  useEffect(() => {
    if (state?.success) {
      console.log(state.question)
      if (formRef.current) {
        formRef.current.reset()
        setContactDetails("")
        setContactMethod("email")
      }
    }
    setMessage(state?.message || "");
    setTimeout(() => {
      setMessage(null);
    }, 4000)

  }, [state])

//  מטפל בהמתנה לטעינת קומפוננט קאפצ'ה
  const handleRecaptchaLoad = useCallback(() => {
    setIsRecaptchaLoading(false);
  }, []);

  // מאפס נתונים בין מעבר בין סוגי קלטים ומעדכן סוג התקשרות
  const handleContactMethodChange = (e) => {
    setContactMethod(prev => {
      if (prev === "email" && e.target.value === ("sms" || "whatsapp") ||
        prev === ("sms" || "whatsapp") && e.target.value === "email") {
        setContactDetails("")
      }
      return e.target.value
    })
  }

  return (
    <div className={styles.container}>
      {/* כותרת */}
      <Text as="h3" fontStyle="b">
        <span className={styles.header}>
          <SiTheconversation size={26} />
          {`  כתיבת שאלה לרב  `}
        </span>
      </Text>

      {state?.error && (
          <span className={styles.message}>
            <Text as="h4" textColor="red" fontStyle="b">{state.error}</Text>
          </span>
        )}

      {/* טופס */}
      <form ref={formRef} action={formAction} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Text as="h5" fontStyle="b">כותרת</Text>
          </label>
          <input
            type="text"
            name='header'
            placeholder="נסה לנסח את השאלה במשפט אחד"
            className={styles.input}
            minLength={10}
            pattern="^[\u0590-\u05FF\s]*$"
            title="אנא הכנס כותרת בעברית בלבד"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Text as="h5" fontStyle="b">*תוכן השאלה</Text>
          </label>
          <textarea
            name='question'
            placeholder="הכנס שאלה בעברית באורך של 20 תווים ומעלה"
            title="הכנס שאלה בעברית באורך של 20 תווים ומעלה"
            className={styles.textarea}
            minLength={20}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Text as="h5" fontStyle="b">

              *בחר את אופן קבלת המענה
            </Text>
          </label>

          <div className={styles.formGroup}>
            <input
              type={contactMethod === 'email' ? 'email' : 'tel'}
              pattern={contactMethod === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' : '^\\d{10}$'}
              title={contactMethod === 'email' ? 'אנא הכנס כתובת אימייל תקינה' : 'אנא הכנס מספר טלפון בעל 10 ספרות בדיוק'}
              minLength={contactMethod === 'email' ? 0 : 10}
              maxLength={contactMethod === 'email' ? 50 : 10}
              name={contactMethod === 'email' ? 'email' : 'phone'}
              placeholder={contactMethod === 'email' ? 'הכנס את האימייל שלך' : 'הכנס את מספר הטלפון שלך'}
              className={styles.input}
              value={contactDetails}
              style={{ direction: "ltr" }}
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

          <div className={styles.contactOptions}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="contactOption"
                value="email"
                className={styles.radio}
                checked={contactMethod === 'email'}
                onChange={handleContactMethodChange}
              />

              <Text as="h5" fontStyle="h">
                Email
              </Text>
            </label>

            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="contactOption"
                value="sms"
                checked={contactMethod === 'sms'}
                onChange={handleContactMethodChange}
                className={styles.radio}
              />
              <Text as="h5" fontStyle="h">
                SMS
              </Text>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="contactOption"
                value="whatsapp"
                className={styles.radio}
                checked={contactMethod === 'whatsapp'}
                onChange={handleContactMethodChange}
              />
              <Text as="h5" fontStyle="h">
                WhatsApp
              </Text>
            </label>
          </div>
        </div>


        <div className={styles.submitButton}>
          <div className={styles.recaptcha}>
            {isRecaptchaLoading && (
              <div className={styles.loading}><div className={styles.spinner}></div></div>
            )}
            <div style={{ display: isRecaptchaLoading ? 'none' : 'block' }}>
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(value) => setCaptchaValue(value)}
                asyncScriptOnLoad={handleRecaptchaLoad}
              />
            </div>
          </div>
          {message ? (
            <span className={styles.message}>
              <Text as="h4" textColor="black" fontStyle="b">{message}</Text>
            </span>
          ) : (
            <SubmitButton
              text={"שלח"}
              width={"100%"}
              // onPendingText={"שולח..."}
              disabled={!captchaValue}
            />
          )}
        </div>
    
      </form>
    </div>
  )
}
