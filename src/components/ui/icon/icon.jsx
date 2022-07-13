import * as React from "react"
import * as styles from './icon.module.css';

export default function Icon({ icon, isBig }) {
  return (
    <div style={{
      backgroundImage: `url(${icon})`,
      width: isBig ? '32rem' : '24rem',
      height: isBig ? '32rem' : '24rem'
    }} className={styles.icon} />
  )
}