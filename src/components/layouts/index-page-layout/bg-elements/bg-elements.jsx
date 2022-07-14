import * as React from "react";
import * as styles from './bg-elements.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MediaGatsbyImage } from "../../../ui";

export default function BgElements() {
  const data = useStaticQuery(graphql`
    query bgElementsQuery {
      markdownRemark {
        frontmatter {
          bgElements {
            bubbles {
              bubble {
                childImageSharp {
                  gatsbyImageData(quality: 95, layout: CONSTRAINED )
                }
              } 
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.bgElements.bubbles

  return (
    <div className={styles.backgroundItems}>
      <div className={styles.b1}><MediaGatsbyImage image={data[0].bubble} image_480={data[0].bubble}/></div>
      <div className={styles.b2}><MediaGatsbyImage image={data[1].bubble} image_480={data[1].bubble}/></div>
      <div className={styles.b3}><MediaGatsbyImage image={data[2].bubble} image_480={data[2].bubble}/></div>
      <div className={styles.b4}><MediaGatsbyImage image={data[3].bubble} image_480={data[3].bubble}/></div>
      <div className={styles.b4}><MediaGatsbyImage image={data[4].bubble} image_480={data[4].bubble}/></div>
      <div className={styles.b5}><MediaGatsbyImage image={data[5].bubble} image_480={data[5].bubble}/></div>
      <div className={styles.b6}><MediaGatsbyImage image={data[6].bubble} image_480={data[6].bubble}/></div>
      <div className={styles.b7}><MediaGatsbyImage image={data[7].bubble} image_480={data[7].bubble}/></div>
      <div className={styles.b8}><MediaGatsbyImage image={data[8].bubble} image_480={data[8].bubble}/></div>

    </div>
  )
}
