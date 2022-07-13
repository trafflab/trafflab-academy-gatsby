import * as React from "react"
import * as styles from './opening.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import { BasicButton, MediaGatsbyImage, Icon } from '../../ui/'
import giftIcon from '../../../images/icons/gift.svg'
import OpeningCardList from './opening-card-list/opening-card-list';

export default function Opening() {
  const is480 = React.useContext(Is480Context);
  const openFormPopup = React.useContext(FormContext);
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      markdownRemark {
        frontmatter {
          opening {
            buttonText
            time
            cards {
              title
              text
            }
            giftText
            tag
            text
            imageAlt
            title {
              part
            }
            personImage {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED )
              }
            }
            personImage_480 {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED)
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
          <h1 className={styles.title}>{data.title[0].part}<br/>{data.title[1].part}<br/>{data.title[2].part}</h1>
          <p className={styles.text}>{data.text}</p>
          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopup} text={is480 ? data.buttonText_480 : data.buttonText}/>
          </div>
          <div className={styles.gift}>
            <Icon icon={giftIcon} />
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