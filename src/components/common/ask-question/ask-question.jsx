import * as React from "react"
import * as styles from './ask-question.module.css';
import { LangContext } from "../../../utils/contexts";
import LangList from '../lang-list/lang-list';

export default function AskQuestion() {
  const data = React.useContext(LangContext);
  
  return (
    <div className={styles.askQuestion}>
      <div style={{position: 'relative'}}>
        <p className={styles.workTime}>24<span style={{color: 'var(--color-gray-1)'}}>/7</span></p>
        <a href="https://bit.ly/3zzX7hI" target='__blank' className={styles.askButton}>{data.askQuestion}</a>
      </div>
      
      <div className={styles.langListContainer}><LangList /></div>
    </div>
  )
}