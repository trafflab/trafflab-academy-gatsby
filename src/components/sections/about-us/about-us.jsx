import * as React from "react"
import * as styles from './about-us.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MediaGatsbyImage } from "../../ui";
import AboutUsCard from "./about-us-card/about-us-card";
import { CoinIcon, HeartIcon, RocketIcon } from "../../ui/icons";

export default function AboutUs() {
  const data = useStaticQuery(graphql`
  query aboutUsQuery {
    markdownRemark {
      frontmatter {
        aboutUs {
          title {
            part
          }
          name
          masterOf
          image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }
      }
    }
  }
`).markdownRemark.frontmatter.aboutUs

  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div className={styles.content}>
        <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span> {data.title[1].part}</h2>
        <div className={styles.imageContainer}><MediaGatsbyImage image={data.image} image_480={data.image_480} /></div>
        <div className={styles.nameContainer}>
          <h3 className={styles.name}>{data.name}</h3>
          <p className={styles.masterOf}>{data.masterOf}</p>
        </div>
        <ul className={styles.list}>
          <li className={`${styles.element} ${styles.budget}`}>
            <AboutUsCard>
              <CoinIcon isBig />
              <p className={styles.listText}>Рекламный бюджет<br/>за 2021:<br/><span style={{fontWeight: "700"}}>4 000 000 $</span></p>
            </AboutUsCard>
          </li>
          <li className={`${styles.element} ${styles.turnover}`}>
            <AboutUsCard>
              <CoinIcon isBig />
              <p className={styles.listText}>Оборот на команду<br/> за 2021:<br/><span style={{fontWeight: "700"}}>15 000 000 $</span></p>
            </AboutUsCard>
          </li>
          <li className={`${styles.element} ${styles.team}`}>
            <AboutUsCard>
              <HeartIcon isBig/>
              <p className={styles.listText}><span style={{fontWeight: "700"}}>60 человек</span><br/>в команде</p>
            </AboutUsCard>
          </li>     
          <li className={`${styles.element} ${styles.lines}`}>
            <AboutUsCard>
              <RocketIcon isBig/>
              <p className={styles.listText}>Ниши: Fin-Tech, Crypto,<br/> Ed-tech, Гэмблинг</p>
            </AboutUsCard>
          </li>
        </ul>
      </div>
    </section>
  )
}