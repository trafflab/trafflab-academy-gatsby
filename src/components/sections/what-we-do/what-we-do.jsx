import * as React from "react"
import * as styles from './what-we-do.module.css';
import WhatWeDoCard from "./what-we-do-card/what-we-do-card";
import BasicButton from "../../ui/basic-button/basic-button";
import { Is480Context, LangContext } from "../../../utils/contexts";
import WhatWeDoImage from "./what-we-do-image/what-we-do-image";

import phoneIcon from '../../../images/icons/phone-1.svg';
import calendarIcon from '../../../images/icons/calendar-1.svg';
import redCalendarIcon from '../../../images/icons/calendar-2.svg';
import bannerIcon from '../../../images/icons/banner.svg';
import coinIcon from '../../../images/icons/coin.svg';
import sortIcon from '../../../images/icons/sort.svg';
import graphIcon from '../../../images/icons/graph-2.svg';



export default function WhatWeDo({openFormPopupHandler}) {
  const is480 = React.useContext(Is480Context);
  const data = React.useContext(LangContext).whatWeDoSection;

  return (
    <section className={styles.whatWeDo}>
      <div className={styles.content}>

        <WhatWeDoImage />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{is480 ? data.title480 : data.title}<br/><span style={{color: 'var(--color-red-1'}}>{is480 ? data.subtitle480 : data.subtitle}</span></h2>
          <ul className={styles.list}>
            { is480 && <WhatWeDoCard icon={redCalendarIcon} text={data.cards[6]} />}
            <WhatWeDoCard icon={bannerIcon} text={data.cards[0]} />
            <WhatWeDoCard icon={calendarIcon} text={data.cards[1]} />
            <WhatWeDoCard icon={phoneIcon} text={data.cards[2]} />
            <WhatWeDoCard icon={sortIcon} text={data.cards[3]} />
            <WhatWeDoCard icon={coinIcon} text={data.cards[4]} />
            <WhatWeDoCard icon={graphIcon} text={data.cards[5]} />
            {!is480 && <WhatWeDoCard icon={redCalendarIcon} text={data.cards[6]} />}
          </ul>
          <div className={styles.buttonContainer}>
            <BasicButton text={data.button} handler={openFormPopupHandler}/>
          </div>
        </div>

      </div>
    </section>
  )
  
}