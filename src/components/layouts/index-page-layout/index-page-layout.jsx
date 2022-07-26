import * as React from "react";
import '@splidejs/react-splide/css/core';
import * as styles from './index-page-layout.module.css';

import BgElements from "./bg-elements/bg-elements";
import { Header, Footer  } from "../../sections";
import { NavPopup } from '../../popups/'
import { FormPopup } from "../../popups/";
import { FormContext } from "../../../utils/contexts";
import { Helmet } from "react-helmet";

export default function IndexPageLayout({ children }) {
  
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const [ isNavPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  return (
    <FormContext.Provider value={openFormPopup}>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '856864205282797');
            fbq('track', 'PageView');          
        `}
        </script>
        <noscript>
          {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=856864205282797&ev=PageView&noscript=1"
          />
          `}
        </noscript>
      </Helmet>
      <BgElements />
      <div className={styles.content}>
        <Header openNavPopupHandler={openNavPopup}/>
        <main className={styles.main}>
          { children }
        </main>
        <Footer />
      </div>
      <NavPopup isOpen={isNavPopupOpen} closeHandler={closeNavPopup}/>
      <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup} />
    </FormContext.Provider>
  )
}