import * as React from "react"
import * as styles from './what-is-it-card.module.css';
import { IconWrapper, Icon } from "../../../ui";

export default function WhatIsItCard({ data, color, icon  }) {
  console.log(data);
  return (
    <article className={styles.card}>
      <IconWrapper color={color}><Icon icon={icon}/></IconWrapper>
      <p className={styles.text}>{data.text}</p>
    </article>
  )
}