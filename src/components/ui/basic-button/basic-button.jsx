import * as React from "react"
import * as styles from './basic-button.module.css';

export default function BasicButton({ type='button',text, handler, isActive=true }) {
  return (
    <button
      className={styles.button}
      style={isActive ? {} : {backgroundColor: 'var(--c-gray-2)'}}
      disabled={!isActive}
      onClick={handler}
      type={type}
    >{text}</button>
  )
}