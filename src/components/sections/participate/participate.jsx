import * as React from "react"
import * as styles from './participate.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { MediaGatsbyImage, BasicButton } from "../../ui";
import { useStaticQuery, graphql } from "gatsby";

export default function Participate() {
  const openFormPopup = React.useContext(FormContext)
  const data = useStaticQuery(graphql`
  query participateQuery {
    markdownRemark {
      frontmatter {
        participate {
          title
          subtitle
          buttonText
          text
          bgBubble {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          bgBubble_480 {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          clockImage {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          clockImage_480 {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }
      }
    }
  }
`).markdownRemark.frontmatter.participate

  return (
    <section className={styles.participate}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            {data.title}<br/>
            <span className={styles.subtitle}>{data.subtitle}</span>
          </h2>
          <p className={styles.text}>{data.text}</p>
          <div className={styles.buttonContainer}><BasicButton text={data.buttonText} handler={openFormPopup} /></div>
        </div>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage image={data.clockImage} image_480={data.clockImage_480} />
        </div>
        <div className={styles.bgBubble}><MediaGatsbyImage image={data.bgBubble} image_480={data.bgBubble_480} /></div>
      </div>

    </section>
  )
}