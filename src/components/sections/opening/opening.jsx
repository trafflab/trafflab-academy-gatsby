import * as React from "react"
import * as styles from './opening.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import { BasicButton, MediaGatsbyImage } from '../../ui/'
import OpeningCardList from './opening-card-list/opening-card-list';
import { GiftIcon } from "../../ui/icons";

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
            title {
              part
            }
            cards {
              title
              text
            }
            giftText
            giftText_480
            tag
            name
            jobTitle
            imageAlt
            personImage {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            personImage_480 {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.opening;
  
  const [eventTime, setEventTime] = React.useState();
  React.useEffect(() => {
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC + 3',
    };
    const now = new Date()
    const time = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      (now.getHours() + 5)
    ).toLocaleString('ru', options)
    setEventTime(time)
  }, [])

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <div className={styles.about}>
            <div className={styles.tag}>{data.tag}</div>
            <p className={styles.time}>{data.time}</p>
          </div>

          <h1 className={styles.title}>{data.title[0].part}<br/>{data.title[1].part}</h1>

          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopup} text={is480 ? data.buttonText_480 : data.buttonText}/>

          </div>
          <div className={styles.gift}>
            <GiftIcon />
            <p className={styles.giftText}>{is480 ? data.giftText_480 : data.giftText}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage
            image={data.personImage}
            image_480={data.personImage_480}
            alt={data.imageAlt}
          />
          <div className={styles.nameContainer}>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.jobTitle}>{data.jobTitle}</p>
          </div>
        </div>
      </div>
      <OpeningCardList cards={data.cards} />
    </section>
  )
}


