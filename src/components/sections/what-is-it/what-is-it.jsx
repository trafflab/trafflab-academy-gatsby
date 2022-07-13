import * as React from "react"
import * as styles from './what-is-it.module.css';
import { Is480Context } from "../../../utils/contexts";
import { useStaticQuery, graphql } from "gatsby";
import WhatIsItCard from "./what-is-it-card/what-is-it-card";
import clientsIcon from '../../../images/icons/clients.svg';
import lampIcon from '../../../images/icons/lamp.svg';
import strongIcon from '../../../images/icons/strong.svg';
import coinIcon from '../../../images/icons/coin.svg';


export default function WhatIsIt() {

  const data = useStaticQuery(graphql`
    query WhatIsItQuery {
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
          }
        }
      }
    }
  `).markdownRemark.frontmatter.whatIsIt
  return (
    <section id='whatIsIt' className={styles.whatIsIt}>
      <div className={styles.content}>
          <h2 className={styles.title}><span style={{color: 'var(--c-purple)'}}>{data.title[0].part}</span> {data.title[1].part}</h2>
          <p className={styles.text}>{data.text}</p>
        <ul className={styles.list}>
          <li><WhatIsItCard isDownPosition={false} color='red' icon={clientsIcon} data={data.cards[0]}/></li>
          <li><WhatIsItCard isDownPosition={true} color='blue' icon={lampIcon} data={data.cards[1]}/></li>
          <li><WhatIsItCard isDownPosition={false} color='purple' icon={strongIcon} data={data.cards[2]}/></li>
          <li><WhatIsItCard isDownPosition={true} color='green' icon={coinIcon} data={data.cards[3]}/></li>
        </ul>
      </div>
    </section>
  )
}
