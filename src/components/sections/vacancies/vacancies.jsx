import * as React from "react"
import * as styles from './vacancies.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import { SplideSlide } from '@splidejs/react-splide';
import VacanciesCard from "./vacancies-card/vacancies-card";
import SliderLayout from "../../common/slider-layout/slider-layout";
import {LangContext} from '../../../utils/contexts';

export default function Vacancies() {
  const data = React.useContext(LangContext).vacancies;

  return (
    <section id='vacancies' className={styles.vacancies}>
      <SectionContentLayout
        titleSecondPart={data.subtitle}
        text={data.text}
        textStyle={{width: '1150rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout>
            {
              data.vacanciesList.map((vacancyData, index) => (
                <SplideSlide key={index}><VacanciesCard readMore={data.readMore} data={vacancyData}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}