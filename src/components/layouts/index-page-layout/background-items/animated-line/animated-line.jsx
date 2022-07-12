import * as React from "react"
import * as styles from './animated-line.module.css';

export default function AnimatedLine({ isRight, position }) {
  return (
    <div className={`${styles.divLineContainer} ${isRight ? styles.isRight : ''}`}>
      <div style={{gridTemplateColumns: `${position}% max-content 1fr`}} className={styles.divLine}>
        <div className={styles.divLineRed}></div>
        <div className={styles.dot}></div>
        <div className={styles.divLineWhite}></div>
      </div>
    </div>
  )
}