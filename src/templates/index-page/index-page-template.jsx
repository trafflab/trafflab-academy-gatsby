import * as React from "react";
import { PageLayout, IndexPageLayout } from "../../components/layouts/";
import {
  PartnersMarquee,
  WhatIsIt,
  Participate,
  Opening,
  ItIsForYou,
  ImportantThings,
  PerfectCooice,
  AboutUs
} from '../../components/sections';

export default function IndexPage() {


  return (
    <PageLayout>
      <IndexPageLayout>
        <Opening />
        <WhatIsIt />
        <ItIsForYou />
        <ImportantThings />
        <PerfectCooice />
        <AboutUs />
        <PartnersMarquee />
        <Participate />
      </IndexPageLayout>
    </PageLayout>
  )
}
