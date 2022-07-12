import * as React from "react"
import * as styles from './slider-layout.module.css';
import { Splide, SplideTrack} from '@splidejs/react-splide';
import ArrowButtonCover from "../../ui/arrow-button-cover/arrow-button-cover";

export default function SliderLayout({ children }) {

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
        gap: '20rem',
      },
    }
  }

  return (
    <Splide hasTrack={ false } options={options}>

      <div className={`splide__arrows ${styles.arrowContainer}`}>
        <button className={`splide__arrow splide__arrow--prev ${styles.prevArrow}`}>
          <ArrowButtonCover direction='left' isSecondary={true} />
        </button> 

        <SplideTrack>
          {children}
        </SplideTrack>

        <button className={`splide__arrow splide__arrow--next ${styles.nextArrow}`}>
          <ArrowButtonCover direction='right' isSecondary={true} />
        </button>

      </div>
    </Splide>
  )
}