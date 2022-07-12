import * as React from "react"
import * as styles from './traffic-sources.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";

import TrafficSourcesCard from "./traffic-sources-card/traffic-sources-card";
import asoImage from '../../../images/traffic-sources-images/aso.png';
import fbImage from '../../../images/traffic-sources-images/facebook.png';
import otherImage from '../../../images/traffic-sources-images/other.png';
import pcImage from '../../../images/traffic-sources-images/pc.png';
import seoImage from '../../../images/traffic-sources-images/seo.png';
import ttImage from '../../../images/traffic-sources-images/tiktok.png';
import uacImage from '../../../images/traffic-sources-images/uac.png';
import unityImage from '../../../images/traffic-sources-images/unity.png';

import asoImage_webp from '../../../images/traffic-sources-images/aso.webp';
import fbImage_webp from '../../../images/traffic-sources-images/facebook.webp';
import otherImage_webp from '../../../images/traffic-sources-images/other.webp';
import pcImage_webp from '../../../images/traffic-sources-images/pc.webp';
import seoImage_webp from '../../../images/traffic-sources-images/seo.webp';
import ttImage_webp from '../../../images/traffic-sources-images/tiktok.webp';
import uacImage_webp from '../../../images/traffic-sources-images/uac.webp';
import unityImage_webp from '../../../images/traffic-sources-images/unity.webp';

import { LangContext } from "../../../utils/contexts";

export default function TrafficSources() {
  const data = React.useContext(LangContext).trafficSourcesSection;

  return (
    <section id='sources' className={styles.trafficSources}>
      <SectionContentLayout
        titleFirstPart='Traffic'
        titleSecondPart='Sources'
        text={data.text}
        textStyle={{width: '550rem'}}
      >
        <ul className={styles.list}>
          <TrafficSourcesCard image_webp={fbImage_webp} image={fbImage} title='Facebook' />
          <TrafficSourcesCard image_webp={ttImage_webp} image={ttImage} isDownPosition={true}  title='Tiktok' />
          <TrafficSourcesCard image_webp={uacImage_webp} image={uacImage} title='Google Ads UAC' />
          <TrafficSourcesCard image_webp={unityImage_webp} image={unityImage} isDownPosition={true}  title='In-app' />
          <TrafficSourcesCard image_webp={seoImage_webp} image={seoImage} title='SEO' />
          <TrafficSourcesCard image_webp={pcImage_webp} image={pcImage} isDownPosition={true}  title='PPC' />
          <TrafficSourcesCard image_webp={asoImage_webp} image={asoImage} title='ASO' />
          <TrafficSourcesCard image_webp={otherImage_webp} image={otherImage} isDownPosition={true} title={data.yourOffer} />
        </ul>
      </SectionContentLayout>
    </section>
  )
  
}