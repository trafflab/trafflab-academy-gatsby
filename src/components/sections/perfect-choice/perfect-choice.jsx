import * as React from "react"
import * as styles from './perfect-choice.module.css';
import PerfectChoiceCard from "./perfect-choice-card/perfect-choice-card";
import { useStaticQuery, graphql } from "gatsby";
import SliderLayout from "../../common/slider-layout/slider-layout";
import { SplideSlide } from "@splidejs/react-splide";
import { Is480Context } from "../../../utils/contexts";

export default function PerfectChoice() {

  const is480 = React.useContext(Is480Context);
  const data = useStaticQuery(graphql`
    query perfectChoiceQuery {
      markdownRemark {
        frontmatter {
          perfectChoice {
            title {
              part
            }
            cards {
              cardImage {
                childImageSharp {
                  gatsbyImageData(quality: 95, layout: CONSTRAINED )
                }
              }
              imageAlt
              title
              list {
                elementText
              }
            }

          }
        }
      }
    }
  `).markdownRemark.frontmatter.perfectChoice

  return (
    <section id='sources' className={styles.perfectChoice}>
      <div className={styles.content}>
        <h2 className={styles.title}>{data.title[0].part} <span style={{color: 'var(--c-purple)'}}>{data.title[1].part}</span> {data.title[2].part}</h2>

        {
          is480 
            ? <SliderLayout>
                {
                  data.cards.map((cardData, index) => (
                    <SplideSlide><PerfectChoiceCard data={cardData} /></SplideSlide>
                  ))
                }
              </SliderLayout>
            : <ul className={styles.list}>
                {
                  data.cards.map((cardData, index) => (
                    <li key={index}><PerfectChoiceCard data={cardData} /></li>
                  ))
                }
              </ul>
        }
      </div>
    </section>
  )
  
}