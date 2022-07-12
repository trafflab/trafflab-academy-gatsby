import * as React from "react"
import * as styles from './icon-link.module.css';
import CircledIconWrapper from "../../circled-icon-wrapper/circled-icon-wrapper";

export default function IconLink({ icon, linkTo, isSmall }) {
  return (
    <li className={styles.listElement}>
      <a target='_blank' href={linkTo} className={styles.link}>
        <CircledIconWrapper isSmall={isSmall} icon={icon} />
      </a>
    </li>
  )
}
