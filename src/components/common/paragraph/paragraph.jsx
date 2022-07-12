import * as React from "react"
import * as styles from './paragraph.module.css';


export default function Paragraph({subtitle, text}) {

  return (
    <div className={styles.paragraph}>
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      <pre className={styles.text}>{text}</pre>
    </div>

  )
}