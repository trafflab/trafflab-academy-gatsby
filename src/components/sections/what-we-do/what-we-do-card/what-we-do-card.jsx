import * as React from "react"
import * as styles from './what-we-do-card.module.css';

export default function WhatWeDoCard({ icon, text }) {

  return (
    <li className={styles.listElement}>
      <article className={styles.card}>
        <div style={{backgroundImage: `url(${icon})`}} className={styles.icon}></div>
        <p className={styles.text}>{text}</p>
      </article>
    </li>
  )
}