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
            items {
              item {
                childImageSharp {
                  gatsbyImageData(quality: 95, layout: CONSTRAINED )
                }
              } 
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.bgElements
  const bubblesData = data.bubbles
  const itemsData = data.items

  return (
    <div className={styles.backgroundItems}>
      <div className={styles.bubbles}>
        <div className={styles.b1}><MediaGatsbyImage image={bubblesData[0].bubble} image_480={bubblesData[0].bubble}/></div>
        <div className={styles.b2}><MediaGatsbyImage image={bubblesData[1].bubble} image_480={bubblesData[1].bubble}/></div>
        <div className={styles.b3}><MediaGatsbyImage image={bubblesData[2].bubble} image_480={bubblesData[2].bubble}/></div>
        <div className={styles.b4}><MediaGatsbyImage image={bubblesData[3].bubble} image_480={bubblesData[3].bubble}/></div>
        <div className={styles.b5}><MediaGatsbyImage image={bubblesData[4].bubble} image_480={bubblesData[4].bubble}/></div>
        <div className={styles.b6}><MediaGatsbyImage image={bubblesData[5].bubble} image_480={bubblesData[5].bubble}/></div>
        <div className={styles.b7}><MediaGatsbyImage image={bubblesData[6].bubble} image_480={bubblesData[6].bubble}/></div>
        <div className={styles.b8}><MediaGatsbyImage image={bubblesData[7].bubble} image_480={bubblesData[7].bubble}/></div>
        <div className={styles.b9}><MediaGatsbyImage image={bubblesData[8].bubble} image_480={bubblesData[8].bubble}/></div>
      </div>
      <div className={styles.items}>
        <div className={styles.i1}><MediaGatsbyImage image={itemsData[0].item} image_480={itemsData[0].item}/></div>
        <div className={styles.i2}><MediaGatsbyImage image={itemsData[1].item} image_480={itemsData[1].item}/></div>
        <div className={styles.i3}><MediaGatsbyImage image={itemsData[2].item} image_480={itemsData[2].item}/></div>
        <div className={styles.i4}><MediaGatsbyImage image={itemsData[3].item} image_480={itemsData[3].item}/></div>
        <div className={styles.i5}><MediaGatsbyImage image={itemsData[4].item} image_480={itemsData[4].item}/></div>
        <div className={styles.i6}><MediaGatsbyImage image={itemsData[5].item} image_480={itemsData[5].item}/></div>
        <div className={styles.i7}><MediaGatsbyImage image={itemsData[6].item} image_480={itemsData[6].item}/></div>
        <div className={styles.i8}><MediaGatsbyImage image={itemsData[7].item} image_480={itemsData[7].item}/></div>
        <div className={styles.i9}><MediaGatsbyImage image={itemsData[8].item} image_480={itemsData[8].item}/></div>
        <div className={styles.i10}><MediaGatsbyImage image={itemsData[9].item} image_480={itemsData[9].item}/></div>
      </div>
    </div>
  )
}
