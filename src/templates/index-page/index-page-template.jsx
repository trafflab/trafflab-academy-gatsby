import * as React from "react";
import { PageLayout, IndexPageLayout } from "../../components/layouts/";
import { FormPopup } from "../../components/popups";
import {
  TrafficSources,
  WhatWeDo,
  Ecosystem,
  Blog,
  PartnersMarquee,
  Vacancies,
  PageForm,
} from '../../components/sections';

export default function IndexPage() {

  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  return (
    <PageLayout>
      <IndexPageLayout>
        {/* <TrafficSources />
        <WhatWeDo openFormPopupHandler={openFormPopup}/>
        <Ecosystem />
        <Blog openArticlePopupHandler={openArticlePopup}/>
        <PartnersMarquee />
        <Vacancies />
        <PageForm /> */}

        {/* <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/> */}
      </IndexPageLayout>
    </PageLayout>
  )
}
