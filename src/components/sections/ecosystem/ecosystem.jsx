import * as React from "react"
import * as styles from './ecosystem.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import EcosystemCard from "./ecosystem-card/ecosystem-card";
import SliderLayout from "../../common/slider-layout/slider-layout";
import { ecosystemCardsData } from "../../../misc/common-data";
import { SplideSlide } from '@splidejs/react-splide';
import { LangContext } from "../../../utils/contexts";

export default function Ecosystem() {
  const data = React.useContext(LangContext).ecosystemSection;

  return (
    <section id='ecosystem' className={styles.ecosystem}>
      <SectionContentLayout
        titleSecondPart='ecosystem'
        text={data.text}
        textStyle={{width: '950rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout>
            {
              ecosystemCardsData.map((cardData, index) => (
                <SplideSlide key={index}><EcosystemCard cardClass={cardData.cardClass} linkTo={cardData.linkTo}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}