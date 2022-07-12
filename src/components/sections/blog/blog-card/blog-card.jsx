import * as React from "react"
import * as styles from './blog-card.module.css';
import MediaImage from '../../../ui/media-image/media-image';

export default function BlogCard({ openHandler, data: { image, image_480, image_webp, image_480_webp, title, texts, id, slug }} ) {

  return (
    <article className={styles.card}>
      <button onClick={() => openHandler(String(id), slug)} className={styles.button} type='button' >

        <div className={styles.imageContainer}>
          <MediaImage
            image_webp={image_webp}
            image_480_webp={image_480_webp}
            image={image}
            image_480={image_480}
          />
          </div>
        <div className={styles.textContainer}>
          <div className={styles.about}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{texts[0].text}</p>
          </div>
        </div>
      </button>
    </article>
  )
}