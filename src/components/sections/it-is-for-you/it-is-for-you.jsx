import * as React from "react"
import * as styles from './it-is-for-you.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import { BasicButton, MediaGatsbyImage } from '../../ui/'
import ItIsForYouCard from "./it-is-for-you-card/it-is-for-you-card";

export default function ItIsForYou() {
  const is480 = React.useContext(Is480Context);
  const openFormPopup = React.useContext(FormContext);
  const data = useStaticQuery(graphql`
    query itIsForYouQuery {
      markdownRemark {
        frontmatter {
          itIsForYou {
            buttonText
            cards {
              cardImage {
                childImageSharp {
                  gatsbyImageData(quality: 95, layout: CONSTRAINED )
                }
              }
              text
              imageAlt
            }
            title {
              part
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.itIsForYou
  
  return (
    <section id='itIsForYou' className={styles.itIsForYou}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span> {data.title[1].part}</h2>
          <div className={styles.buttonContainer}><BasicButton handler={openFormPopup} text={data.buttonText}/></div>
        </div>
        <ul className={styles.list}>
          {data.cards.map((cardData, index) => (
            <li key={index}>
              <ItIsForYouCard data={cardData} />
              <div className={styles.line}></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}