import * as React from "react"
import * as styles from './important-things.module.css';
import TrafficSourcesCard from "./important-things-card/important-things-card";
import { useStaticQuery, graphql } from "gatsby";

export default function ImportantThings() {
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
                  gatsbyImageData(quality: 95, layout: CONSTRAINED )
                }
              }
            }

          }
        }
      }
    }
  `).markdownRemark.frontmatter.importantThings

  return (
    <section id='sources' className={styles.importantThings}>
      <div className={styles.content}>
        <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span><br/>{data.title[1].part}</h2>
        <ul className={styles.list}>
          {
            data.cards.map((cardData, index) => (
              <li key={index}><TrafficSourcesCard data={cardData} /></li>
            ))
          }
        </ul>
      </div>
    </section>
  )
  
}