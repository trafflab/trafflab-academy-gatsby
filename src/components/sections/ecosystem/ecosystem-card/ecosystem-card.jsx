import * as React from "react"
import * as styles from './ecosystem-card.module.css';
import { Link } from "gatsby";

export default function EcosystemCard({ cardClass, linkTo }) {
  return (
    <li>
      <article className={`${styles.card} ${styles[cardClass]}`}>
        <Link to={linkTo}><div className={styles.logo}/></Link>
      </article>
    </li>
  )
}