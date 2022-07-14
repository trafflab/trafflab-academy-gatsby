import * as React from "react"
import * as styles from './icon-link.module.css';
import CircledIconWrapper from "../../../ui/circled-icon-wrapper/circled-icon-wrapper";

export default function IconLink({ children, linkTo }) {
  return (
    <li className={styles.listElement}>
      <a target='_blank' href={linkTo} className={styles.link}>
        <CircledIconWrapper>{children}</CircledIconWrapper>
      </a>
    </li>
  )
}
