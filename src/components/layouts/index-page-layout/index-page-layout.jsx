import * as React from "react";
import '@splidejs/react-splide/css/core';
import * as styles from './index-page-layout.module.css';

import BackgroundItems from "./background-items/background-items";
import { Header, Footer  } from "../../sections";
import SuccessMessage from '../../common/success-message/success-message';
import { MessagesContext } from '../../../utils/contexts';
import { NavPopup } from '../../popups/'

export default function IndexPageLayout({ children, openFormPopupHandler, openNavPopupHandler }) {
  
  const [ isSuccessMessage, setIsSuccessMessage ] = React.useState(false);
  const [ isNavPopupOpen, setIsNavPopupOpen ] = React.useState(false);
  
  const showSuccessMessage = () => {
    setIsSuccessMessage(true)
    setTimeout(() => setIsSuccessMessage(false), 2000)
  } 
  
  return (
    <>
      <MessagesContext.Provider value={showSuccessMessage}>
        <BackgroundItems />
        <div className={styles.content}>
          <Header openNavPopupHandler={() => setIsNavPopupOpen(true)}/>
          <main className={styles.main}>
            { children }
          </main>
          <Footer />
        </div>
        <SuccessMessage isShown={isSuccessMessage} />
        <NavPopup isOpen={isNavPopupOpen} closeHandler={() => setIsNavPopupOpen(false)}/>
      </MessagesContext.Provider>
    </>
  )
}