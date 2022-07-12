import * as React from "react"
import * as styles from './what-we-do-image.module.css';
import lottie from 'lottie-web';
import animation from '../../../../images/what-we-do/back.json';
import MediaImage from "../../../ui/media-image/media-image";

import image from '../../../../images/what-we-do/what-we-do.png';
import image_480 from '../../../../images/what-we-do/what-we-do-480.png';
import image_webp from '../../../../images/what-we-do/what-we-do.webp';
import image_480_webp from '../../../../images/what-we-do/what-we-do-480.webp';

import coin1 from '../../../../images/what-we-do/coin-1.png';
import coin2 from '../../../../images/what-we-do/coin-2.png';
import coin3 from '../../../../images/what-we-do/coin-3.png';
import coin1_480 from '../../../../images/what-we-do/coin-1-480.png';
import coin2_480 from '../../../../images/what-we-do/coin-2-480.png';
import coin3_480 from '../../../../images/what-we-do/coin-3-480.png';

import coin1_webp from '../../../../images/what-we-do/coin-1.webp';
import coin2_webp from '../../../../images/what-we-do/coin-2.webp';
import coin3_webp from '../../../../images/what-we-do/coin-3.webp';
import coin1_480_webp from '../../../../images/what-we-do/coin-1-480.webp';
import coin2_480_webp from '../../../../images/what-we-do/coin-2-480.webp';
import coin3_480_webp from '../../../../images/what-we-do/coin-3-480.webp';

export default function WhatWeDoImage() {
  const lottieContainer = React.useRef()

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      animationData: animation,
      rendere: 'canvas',
      loop: true,
      autoplay: true,

    })
    return () => anim.destroy()
  }, [lottieContainer])

  return (
    <div className={styles.imageContainer}>
      <div ref={lottieContainer} className={styles.lottieDiv} />
      <MediaImage
        image_webp={image_webp}
        image_480_webp={image_480_webp}
        image={image}
        image_480={image_480}
      />
      <div className={styles.coin1}><MediaImage image_webp={coin1_webp} image_480_webp={coin1_480_webp} image={coin1} image_480={coin1_480}/></div>
      <div className={styles.coin2}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>
      <div className={styles.coin3}><MediaImage image_webp={coin3_webp} image_480_webp={coin3_480_webp} image={coin3} image_480={coin3_480}/></div>
    </div>
  )
}