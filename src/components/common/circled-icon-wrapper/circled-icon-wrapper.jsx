import * as React from "react"
import * as styles from './circled-icon-wrapper.module.css';

export default function CircledIconWrapper({ icon, isSmall }) {
  return (
    <div style={{backgroundImage: `url(${icon})`}} className={`${styles.wrapper} ${isSmall ? styles.isSmall : ''}`}></div>
  )
}