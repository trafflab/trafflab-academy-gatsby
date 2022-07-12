import * as React from "react"
import * as styles from './section-content-layout.module.css';

export default function SectionContentLayout({
  children,
  titleSecondPart,
  text,
  textStyle,
  noMarginBottom,
}) {
  return (
    <div className={styles.content}>

      <div style={noMarginBottom ? {marginBottom: 0} : {}} className={styles.textContainer}>
        <h2 className={styles.title}>
          Traffic<br />
          <span style={{color: 'var(--color-red-1)'}}>{titleSecondPart}</span>
        </h2>
        <p className={styles.text} style={textStyle}>{text}</p>
      </div>

      {children}

    </div>
  )
}