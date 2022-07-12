import * as React from "react"
import * as styles from './nav-list-element.module.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavListElement({ text, linkTo }) {

  return (
    <li className={styles.listElement}>
      <AnchorLink
        to={linkTo}
        className={styles.link}
        title={text}
      />
    </li>
  )
}