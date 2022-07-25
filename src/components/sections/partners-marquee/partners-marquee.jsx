import * as React from "react"
import * as styles from './partners-marquee.module.css';
import Marquee from "react-fast-marquee";
import { MediaGatsbyImage } from "../../ui";
import { useStaticQuery, graphql } from "gatsby";

export default function PartnersMarquee() {
  const data = useStaticQuery(graphql`
    query partersMarqueeQuery {
      markdownRemark {
        frontmatter {
          partersMarquee {
            title
            partners {
              partnerLogo {
                childImageSharp {
                  gatsbyImageData(quality: 70, layout: CONSTRAINED, placeholder: BLURRED )
                }
              }
              dimensionsStyle {
                width
                height
              }
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.partersMarquee
  
  return (
    <section id='partners' className={styles.partenrsMarquee}>
      <div className={styles.content}>

        <h2 className={styles.title}>{data.title}</h2>
        <Marquee gradient={false} direction="right">
          <ul className={styles.list}>
            {
              data.partners.map((partnerData, index) => (
                <li key={index} className={styles.listElement}>
                  <div style={partnerData.dimensionsStyle}>
                    <MediaGatsbyImage image={partnerData.partnerLogo} image_480={partnerData.partnerLogo} />
                  </div>
                </li>
              ))
            }
          </ul>
        </Marquee>
      </div>
    </section>
  )
}