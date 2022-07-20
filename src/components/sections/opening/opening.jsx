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
  `).markdownRemark.frontmatter.opening

  const handleTest = () => {
    fetch('https://trafflabacademy.amocrm.ru/api/v4/leads', {
      method: 'POST',
      // mode: 'no-cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhNTUzMTllN2U2ZDhlMTcxNzg5MTQ2YzViZWY1NTI1MDE4N2NmMTg2YWI0MDZiYjNhMmIzOWNjMzE4YmM2ZGQ4YmJlZDljNTU1ZGQ4ZTBiIn0.eyJhdWQiOiIzOGFmMGI1Yy1jMmQ4LTQ5NDMtOTk5Mi00NjcyZGY4YzBlNjUiLCJqdGkiOiJlYTU1MzE5ZTdlNmQ4ZTE3MTc4OTE0NmM1YmVmNTUyNTAxODdjZjE4NmFiNDA2YmIzYTJiMzljYzMxOGJjNmRkOGJiZWQ5YzU1NWRkOGUwYiIsImlhdCI6MTY1ODI1OTc4MSwibmJmIjoxNjU4MjU5NzgxLCJleHAiOjE2NTgzNDYxODEsInN1YiI6IjgzNzI4ODciLCJhY2NvdW50X2lkIjozMDI3ODMwOCwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.ZG1TJYR104RzF0aN0-5pG2rri2_roJrMT_A-E-T-fGI4FXTIiPsabyST_GxMPrzzJGVrkrTVO3-wSFaWyAyusTem5HLrDtWlEJhXDKB7HYKnaU9OFsvFjq3M-NFvOf3T0z_gCzOa8KS_2G2d9eXrxlkcl4DAWqXe4kHWGKiHQkb2V_2nCPIj3-UWGF_epeH0B8DxuIGZp0i-ZaTXVxVkA3tAc7zkqcYd4aWvpP0v4fuEOiiVLX9kxuJUUeA2lqY_sh2uUm-Iwov3YzwFapf-Ai9aZS19uzVHFHubv1AQ8skT951lvOZ_N_SlLJJvFSK1azFvgkxyN57hYg3dypJahQ",
        "User-Agent": 'amoCRM-API-client/1.0',
      },
      body: JSON.stringify(
          [
            {
                "name": "Сделка для примера 1",
                "price": 20000,
            },
            {
                "name": "Сделка для примера 2",
                "price": 10000,
            }
        ]
      )
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <div className={styles.about}>
            <div className={styles.tag}>{data.tag}</div>
            <p className={styles.time}>{data.time}</p>
          </div>

          <h1 className={styles.title}>Как зарабатывать<br/>от 30 000 $ на арбитраже трафика</h1>

          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopup} text={is480 ? data.buttonText_480 : data.buttonText}/>
            <BasicButton handler={handleTest} text={'test'}/>

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


