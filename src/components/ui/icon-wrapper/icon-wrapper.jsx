import * as React from "react"
import * as styles from './icon-wrapper.module.css';

export default function IconWrapper({ children, color }) {
  return (
    <div className={styles.wrapper} style={{backgroundColor: `var(--c-${color})`}}>
      {children}
    </div>
  )
}