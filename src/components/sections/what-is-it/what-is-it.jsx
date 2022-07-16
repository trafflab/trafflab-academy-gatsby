import * as React from "react"
import * as styles from './what-is-it.module.css';
import { Is480Context } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import WhatIsItCard from "./what-is-it-card/what-is-it-card";
import { CoinIcon, ClientsIcon, LampIcon, StrongIcon } from "../../ui/icons";
import { MediaGatsbyImage } from "../../ui";
import SliderLayout from '../../common/slider-layout/slider-layout'
import { SplideSlide } from "@splidejs/react-splide";
export default function WhatIsIt() {
  const is480 = React.useContext(Is480Context);

  const data = useStaticQuery(graphql`
    query whatIsItQuery {
      markdownRemark {
        frontmatter {
          whatIsIt {
            cards {
              text
            }
            text
            title {
              part
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
              }
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.whatIsIt
  return (
    <section id='whatIsIt' className={styles.whatIsIt}>
      <div className={styles.imageContainer}><MediaGatsbyImage image_480={data.image_480}/></div>
      <div className={styles.content}>
          <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span> {data.title[1].part}</h2>
          <p className={styles.text}>{data.text}</p>
        
        {
          !is480 
            ? <ul className={styles.list}>
                <li><WhatIsItCard isDownPosition={false} color='red' icon={ClientsIcon} data={data.cards[0]}/></li>
                <li><WhatIsItCard isDownPosition={true} color='blue' icon={LampIcon} data={data.cards[1]}/></li>
                <li><WhatIsItCard isDownPosition={false} color='purple' icon={StrongIcon} data={data.cards[2]}/></li>
                <li><WhatIsItCard isDownPosition={true} color='green' icon={CoinIcon} data={data.cards[3]}/></li>
              </ul>
            :
              <SliderLayout gap='20rem'>
                <SplideSlide><WhatIsItCard color='red' icon={ClientsIcon} data={data.cards[0]}/></SplideSlide>
                <SplideSlide><WhatIsItCard color='blue' icon={LampIcon} data={data.cards[1]}/></SplideSlide>
                <SplideSlide><WhatIsItCard color='purple' icon={StrongIcon} data={data.cards[2]}/></SplideSlide>
                <SplideSlide><WhatIsItCard color='green' icon={CoinIcon} data={data.cards[3]}/></SplideSlide>
              </SliderLayout>
        }
      </div>
    </section>
  )
}
