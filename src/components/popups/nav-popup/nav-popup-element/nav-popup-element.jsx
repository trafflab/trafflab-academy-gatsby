import * as React from "react"
import * as styles from './nav-popup-element.module.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavPopupElement({ text, linkTo, closeHandler }) {
  
  return (
    <li onClick={closeHandler} className={styles.listElement}>
      <AnchorLink
        to={linkTo}
        className={styles.link}
        title={text}
      />
    </li>
  )
}