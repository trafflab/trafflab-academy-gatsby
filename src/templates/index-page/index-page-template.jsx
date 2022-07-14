import * as React from "react";
import { PageLayout, IndexPageLayout } from "../../components/layouts/";
import { FormPopup } from "../../components/popups";
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
import { FormContext } from "../../utils/contexts";

export default function IndexPage() {

  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  return (
    <PageLayout>
      <IndexPageLayout>
        <FormContext.Provider value={openFormPopup}>
          <Opening />
          <WhatIsIt />
          <ItIsForYou />
          <ImportantThings />
          <PerfectCooice />
          <AboutUs />
          <PartnersMarquee />
          <Participate />
        </FormContext.Provider>
      </IndexPageLayout>
    </PageLayout>
  )
}
