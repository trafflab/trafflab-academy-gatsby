import * as React from "react"
import * as styles from './slider-layout.module.css';
import { Splide, SplideTrack} from '@splidejs/react-splide';
import ArrowButton from "../../ui/arrow-button/arrow-button";

export default function SliderLayout({ gap_480="16rem", children }) {

  const options = {
    type: 'slide',
    gap: '30rem',
    pagination: false,
    autoWidth: true,
    drag: 'free',
    snap: true,
    trimSpace: false,
    breakpoints: {
      480: {
        gap: gap_480,
      },
    }
  }

  return (
    <Splide hasTrack={ false } options={options}>

      <div className={`splide__arrows ${styles.arrowContainer}`}>
        <button className={`splide__arrow splide__arrow--prev ${styles.prevArrow}`}>
          {/* <ArrowButton isLeft /> */}
        </button> 

        <SplideTrack>
          {children}
        </SplideTrack>

        <button className={`splide__arrow splide__arrow--next ${styles.nextArrow}`}>
          <ArrowButton />
        </button>

      </div>
    </Splide>
  )
}