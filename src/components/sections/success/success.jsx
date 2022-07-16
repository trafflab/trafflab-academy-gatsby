import * as React from "react"
import * as styles from './success.module.css';
import { Link } from "gatsby";
import Logo from '../../common/logo/logo';
import IconWrapper from "../../ui/icon-wrapper/icon-wrapper";
import { LampIcon } from '../../ui/icons/'
import { MediaGatsbyImage } from '../../ui/'
import { useStaticQuery, graphql } from "gatsby";
import buttonArrowIcon from '../../../images/misc/curve-arrow-2.svg'
import { TgSolidIcon } from "../../ui/icons/";
import Footer from "../footer/footer";

export default function Success() {
  const data = useStaticQuery(graphql`
    query successQuery {
      markdownRemark {
        frontmatter {
          success {
            image{
              childImageSharp {
                gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
            coins {
              coin {
                childImageSharp {
                  gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
                }
              }
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.success
  return (
    <div className={styles.successPage}>
      <main className={styles.main}>
        <section className={styles.success}>
          <div className={styles.bg}>
            <div className={styles.i1}><MediaGatsbyImage image={data.coins[0].coin} /></div>
            <div className={styles.i2}><MediaGatsbyImage image={data.coins[1].coin} /></div>
            <div className={styles.i3}><MediaGatsbyImage image={data.coins[2].coin} /></div>

          </div>
          <div className={styles.content}>
            <Link to={`/`}><Logo /></Link>

            <div className={styles.card}>
              <IconWrapper color='purple'><LampIcon/></IconWrapper>
              <p className={styles.cardtext}>
                Подтвердите своё участие на онлайн-вебинаре:<br/>
                <span style={{fontWeight: '700'}}>«Арбитраж трафика: с нуля до миллиона»</span>
              </p>
            </div>

            {/* <h1 className={styles.title}>Осталось сделать последний шаг</h1>
            <p className={styles.subtitle}>Для завершения регистрации перейдите в мессенджер и получите подарок</p>

            <div className={styles.buttonContainer}>
              <Link to="#">
                <div type='button' className={styles.tgButton} disabled>
                  <TgSolidIcon/>
                  Телеграм
                </div>
              </Link>
              <img src={buttonArrowIcon} className={styles.buttonArrow} />
            </div>      */}
          </div>

          {/* <div className={styles.imageContainer}><MediaGatsbyImage image={data.image} image_480={data.image_480} /></div> */}

        </section>
      </main>
      <Footer />
    </div>
    
  )
}