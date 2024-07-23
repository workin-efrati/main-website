'use client'
import Text from '../TextComponent'
import styles from './style.module.scss'
import { useFormStatus } from 'react-dom'

export function SubmitButton({ text, onPendingText = null }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button className={`${pending ? styles.disabledButton : styles.allowedButton} ${styles.button}`} type="submit" disabled={pending}>

        {pending && !onPendingText ? <div className={styles.loading}> <div className={styles.spinner}></div></div> :

          <Text as="h4" textColor="white" fontStyle="b">{pending ? onPendingText : text}</Text>
        }
      </button>
    </>
  )
}