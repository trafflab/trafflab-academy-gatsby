import * as React from "react"
import * as styles from './partners-marquee.module.css';
import Marquee from "react-fast-marquee";
import MediaImage from "../../ui/media-image/media-image";
import { partnersData } from "../../../misc/common-data";
import { LangContext } from "../../../utils/contexts";

export default function PartnersMarquee() {
  const data = React.useContext(LangContext).partnersMarqueeSection;

  return (
    <section id='partners' className={styles.partenrsMarquee}>
      <div className={styles.content}>

        <h2 className={styles.title}>{data.title}</h2>
        <Marquee gradient={false} direction="right">
          <ul className={styles.list}>
            {
              partnersData.map((partnerData, index) => (
                <li key={index} className={styles.listElement}>
                  <div style={partnerData.dimensionsStyle}>
                    <MediaImage image_webp={partnerData.logo_webp} image={partnerData.logo} />
                  </div>
                </li>
              ))
            }
          </ul>
        </Marquee>
      </div>
    </section>
  )
}