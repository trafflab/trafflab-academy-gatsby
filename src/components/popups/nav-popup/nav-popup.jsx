import * as React from "react"
import * as styles from './nav-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout'
import ContactsList from "../../common/contacts-list/contacts-list";
import Logo from "../../common/logo/logo";
import NavPopupElement from "./nav-popup-element/nav-popup-element";

export default function NavPopup({ isOpen, closeHandler }) {

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.navPopup}>
        
        <button onClick={closeHandler} className={styles.closeButton} />
        <div className={styles.logoContainer}><Logo/></div>

        <div className={styles.content}>
          
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <NavPopupElement closeHandler={closeHandler} text='Вебинар' linkTo='#itIsForYou' />
              <NavPopupElement closeHandler={closeHandler} text='Что узнаешь' linkTo='#imortantThings' />
              <NavPopupElement closeHandler={closeHandler} text='Для кого' linkTo='#perfectChoice' />
              <NavPopupElement closeHandler={closeHandler} text='Ведущий' linkTo='#aboutUs' />
              <NavPopupElement closeHandler={closeHandler} text='Контакты' linkTo='#footer' />
            </ul>
          </nav>

          <div className={styles.contactsContainer}><ContactsList intoRow={true}/></div>

        </div>
      </div>
    </PopupLayout>

  )
}