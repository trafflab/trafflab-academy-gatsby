import * as React from "react";
import { PageLayout, IndexPageLayout } from "../../components/layouts/";
import { FormPopup } from "../../components/popups";
import {
  TrafficSources,
  PartnersMarquee,
  WhatIsIt,
  PageForm,
  Opening,
  ItIsForYou
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
          {/* <TrafficSources />
          <WhatWeDo openFormPopupHandler={openFormPopup}/>
          <Ecosystem />
          <Blog openArticlePopupHandler={openArticlePopup}/>
          <PartnersMarquee />
          <Vacancies />
          <PageForm /> */}
          {/* <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/> */}
        </FormContext.Provider>
      </IndexPageLayout>
    </PageLayout>
  )
}
