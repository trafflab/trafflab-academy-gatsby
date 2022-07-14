import * as React from "react"
import * as styles from './important-things-card.module.css';
import {MediaGatsbyImage} from '../../../ui/'

export default function ImportantThingsCard({ data }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage image={data.cardImage} image_480={data.cardImage} alt={data.imageAlt} />
        </div>
        <p className={styles.text}>{data.text}</p>
      </div>
    </article>
  )
}