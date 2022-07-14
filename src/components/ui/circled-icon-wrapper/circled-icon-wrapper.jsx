import * as React from "react"
import * as styles from './circled-icon-wrapper.module.css';

export default function CircledIconWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}