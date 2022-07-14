import * as React from "react"
import * as styles from './about-us-card.module.css';
import { Icon } from "../../../ui";

export default function AboutUsCard({icon, children}) {

  return (
    <article className={styles.card}>
      {/* <Icon icon={icon} isBig/> */}
      {children}
    </article>
  )
}