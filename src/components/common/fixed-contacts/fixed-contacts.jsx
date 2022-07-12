import * as React from "react"
import * as styles from './fixed-contacts.module.css';
import CircledIconWrapper from "../circled-icon-wrapper/circled-icon-wrapper";
import upArrowIcon from '../../../images/icons/arrow-up.svg'
import ContactsList from "../contacts-list/contacts-list";
import { LangContext } from "../../../utils/contexts";

export default function FixedContacts({scrollHandler, clickHandler}) {
  const data = React.useContext(LangContext);
  
  return (
    <div className={styles.fixedContacts}>
      <div className={styles.listContainer}>
        <ContactsList />
      </div>
      <div className={styles.upArrow}>
        <button onClick={scrollHandler} className={styles.upButton}><CircledIconWrapper icon={upArrowIcon} /></button>  
        <span onClick={clickHandler} className={styles.upText}>{data.upButton}</span>
      </div>
    </div>
  )
}