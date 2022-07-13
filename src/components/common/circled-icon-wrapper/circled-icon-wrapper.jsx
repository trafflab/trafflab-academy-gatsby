import * as React from "react"
import * as styles from './circled-icon-wrapper.module.css';

export default function CircledIconWrapper({ icon }) {
  return (
    <div style={{backgroundImage: `url(${icon})`}} className={styles.wrapper}></div>
  )
}