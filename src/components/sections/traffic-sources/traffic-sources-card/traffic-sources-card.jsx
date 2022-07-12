import * as React from "react"
import * as styles from './traffic-sources-card.module.css';
import MediaImage from '../../../ui/media-image/media-image';

export default function TrafficSourcesCard({ image, image_webp, title, isDownPosition }) {

  return (
    <li className={styles.listElement}>
      <article style={isDownPosition ? {alignItems: 'flex-end'} : {}} className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <MediaImage image={image} image_webp={image_webp} />
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </article>
    </li>
  )
}