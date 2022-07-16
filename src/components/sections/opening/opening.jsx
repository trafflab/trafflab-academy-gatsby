import * as React from "react"
import * as styles from './opening.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import { BasicButton, MediaGatsbyImage } from '../../ui/'
import OpeningCardList from './opening-card-list/opening-card-list';
import { GiftIcon } from "../../ui/icons";
import curveArrow from '../../../images/misc/curve-arrow.svg';

export default function Opening() {
  const is480 = React.useContext(Is480Context);
  const openFormPopup = React.useContext(FormContext);
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      markdownRemark {
        frontmatter {
          opening {
            buttonText
            buttonText_480
            time
            cards {
              title
              text
            }
            giftText
            tag
            text
            imageAlt
            personImage {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            personImage_480 {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.opening
  
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <div className={styles.about}>
            <div className={styles.tag}>{data.tag}</div>
            <p className={styles.time}>{data.time}</p>
          </div>

          <h1 className={styles.title}>Как зарабатывать<br/>от 30 000 $ на арбитраже трафика</h1>

          <p className={styles.text}>{data.text}</p>
          <div className={styles.buttonContainer}>
            <img src={curveArrow} className={styles.curveArrow} />
            <BasicButton handler={openFormPopup} text={is480 ? data.buttonText_480 : data.buttonText}/>
          </div>
          <div className={styles.gift}>
            <GiftIcon />
            <p className={styles.giftText}>{data.giftText}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage
            image={data.personImage}
            image_480={data.personImage_480}
            alt={data.imageAlt}
          />
        </div>
      </div>
      <OpeningCardList cards={data.cards} />
    </section>
  )
}