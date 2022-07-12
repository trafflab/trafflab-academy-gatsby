import * as React from "react"
import * as styles from './opening-image.module.css';
import MediaImage from "../../../ui/media-image/media-image";
import image from '../../../../images/opening/opening.png';
import image_480 from '../../../../images/opening/opening480.png';
import image_webp from '../../../../images/opening/opening.webp';
import image_480_webp from '../../../../images/opening/opening480.webp';

import coin1 from '../../../../images/opening/coin-1.png';
import coin2 from '../../../../images/opening/coin-2.png';
import coin3 from '../../../../images/opening/coin-3.png';
import coin4 from '../../../../images/opening/coin-4.png';
import coin5 from '../../../../images/opening/coin-5.png';
import coin6 from '../../../../images/opening/coin-6.png';
import coin7 from '../../../../images/opening/coin-7.png';
import coin8 from '../../../../images/opening/coin-8.png';
import coin1_480 from '../../../../images/opening/coin480-1.png';
import coin2_480 from '../../../../images/opening/coin480-2.png';
import coin3_480 from '../../../../images/opening/coin480-3.png';
import coin4_480 from '../../../../images/opening/coin480-4.png';
import coin5_480 from '../../../../images/opening/coin480-5.png';
import coin6_480 from '../../../../images/opening/coin480-6.png';
import coin7_480 from '../../../../images/opening/coin480-7.png';
import coin8_480 from '../../../../images/opening/coin480-8.png';

import coin1_webp from '../../../../images/opening/coin-1.webp';
import coin2_webp from '../../../../images/opening/coin-2.webp';
import coin3_webp from '../../../../images/opening/coin-3.webp';
import coin4_webp from '../../../../images/opening/coin-4.webp';
import coin5_webp from '../../../../images/opening/coin-5.webp';
import coin6_webp from '../../../../images/opening/coin-6.webp';
import coin7_webp from '../../../../images/opening/coin-7.webp';
import coin8_webp from '../../../../images/opening/coin-8.webp';

import coin1_480_webp from '../../../../images/opening/coin480-1.webp';
import coin2_480_webp from '../../../../images/opening/coin480-2.webp';
import coin3_480_webp from '../../../../images/opening/coin480-3.webp';
import coin4_480_webp from '../../../../images/opening/coin480-4.webp';
import coin5_480_webp from '../../../../images/opening/coin480-5.webp';
import coin6_480_webp from '../../../../images/opening/coin480-6.webp';
import coin7_480_webp from '../../../../images/opening/coin480-7.webp';
import coin8_480_webp from '../../../../images/opening/coin480-8.webp';

export default function OpeningImage() {

  return (
    <div className={styles.imageContainer}>
      <MediaImage image={image} image_480={image_480} image_webp={image_webp} image_480_webp={image_480_webp} alt='lucky cat'/>
      <div className={styles.imageShadow}></div>
      <div className={styles.coin1}><MediaImage image_webp={coin1_webp} image_480_webp={coin1_480_webp} image={coin1} image_480={coin1_480}/></div>
      <div className={styles.coin2}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>
      <div className={styles.coin3}><MediaImage image_webp={coin3_webp} image_480_webp={coin3_480_webp} image={coin3} image_480={coin3_480}/></div>
      <div className={styles.coin4}><MediaImage image_webp={coin4_webp} image_480_webp={coin4_480_webp} image={coin4} image_480={coin4_480}/></div>
      <div className={styles.coin5}><MediaImage image_webp={coin5_webp} image_480_webp={coin5_480_webp} image={coin5} image_480={coin5_480}/></div>
      <div className={styles.coin6}><MediaImage image_webp={coin6_webp} image_480_webp={coin6_480_webp} image={coin6} image_480={coin6_480}/></div>
      <div className={styles.coin7}><MediaImage image_webp={coin7_webp} image_480_webp={coin7_480_webp} image={coin7} image_480={coin7_480}/></div>
      <div className={styles.coin8}><MediaImage image_webp={coin8_webp} image_480_webp={coin8_480_webp} image={coin8} image_480={coin8_480}/></div>
      <div className={styles.coin9}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>


    </div>
  )
}