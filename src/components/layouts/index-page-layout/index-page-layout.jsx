import * as React from "react";
import '@splidejs/react-splide/css/core';
import * as styles from './index-page-layout.module.css';

import BgElements from "./bg-elements/bg-elements";
import { Header, Footer  } from "../../sections";
import { NavPopup } from '../../popups/'
import { FormPopup } from "../../popups/";
import { FormContext } from "../../../utils/contexts";

export default function IndexPageLayout({ children }) {
  
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const [ isNavPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  return (
    <FormContext.Provider value={openFormPopup}>
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