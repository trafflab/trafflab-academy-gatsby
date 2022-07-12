import * as React from "react"
import * as styles from './basic-button.module.css';

export default function BasicButton({ text, handler, isActive=true }) {
  return (
    <button
      className={styles.button}
      style={isActive ? {} : {backgroundColor: 'var(--color-gray-2)'}}
      disabled={!isActive}
      onClick={handler}
      type='button'
    >{text}</button>
  )
}