import * as React from "react"
import * as styles from './important-things.module.css';
import TrafficSourcesCard from "./important-things-card/important-things-card";
import { useStaticQuery, graphql } from "gatsby";
import { Is480Context } from "../../../utils/contexts";
import SliderLayout from "../../common/slider-layout/slider-layout";
import { SplideSlide } from "@splidejs/react-splide";

export default function ImportantThings() {
  const is480 = React.useContext(Is480Context);

  const data = useStaticQuery(graphql`
    query importantThingsQuery {
      markdownRemark {
        frontmatter {
          importantThings {
            title {
              part
            }
            cards {
              text
              imageAlt
              cardImage {
                childImageSharp {
                  gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
                }
              }
            }

          }
        }
      }
    }
  `).markdownRemark.frontmatter.importantThings

  return (
    <section id='imortantThings' className={styles.importantThings}>
      <div className={styles.content}>
        <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span><br/>{data.title[1].part}</h2>
        {
          is480
            ? <SliderLayout>
                {
                  data.cards.map((cardData, index) => (
                    <SplideSlide key={index}><TrafficSourcesCard data={cardData}/></SplideSlide>
                  ))
                }
              </SliderLayout>
            : <ul className={styles.list}>
                {
                  data.cards.map((cardData, index) => (
                    <li key={index}><TrafficSourcesCard data={cardData} /></li>
                  ))
                }
              </ul>
        }
      </div>
    </section>
  )
  
}