import * as React from "react"
import * as styles from './opening-card.module.css';
import { IconWrapper } from "../../../../ui";

export default function OpeningCard({ data, color, icon: Icon }) {
  return (
    <article className={styles.card}>
      <IconWrapper color={color}><Icon /></IconWrapper>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.text}>{data.text}</p>
      </div>
    </article>
  )
}