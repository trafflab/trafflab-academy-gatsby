import * as React from "react"
import * as styles from './perfect-choice-card.module.css';
import {MediaGatsbyImage} from '../../../ui'

export default function PerfectChoiceCard({ data }) {

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage image={data.cardImage} image_480={data.cardImage} alt={data.imageAlt} />
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <ul className={styles.list}>
          {
            data.list.map((elementData, index) => (
              <li key={index} className={styles.element}><p className={styles.elementText}>{elementData.elementText}</p></li>
            ))
          }
          </ul>
      </div>
    </article>
  )
}