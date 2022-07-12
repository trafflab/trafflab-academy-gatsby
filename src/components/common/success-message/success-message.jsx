import * as React from "react"
import * as styles from './success-message.module.css';

export default function SuccessMessage({isShown}) {
  
  return (
    <div className={`${styles.successMessage} ${isShown ? styles.isShown : ''}`}>
      <div className={styles.icon}/>
      <p className={styles.message}>Ваша заявка отправлена</p>
    </div>
  )
}