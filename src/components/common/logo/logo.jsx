import * as React from "react"
import * as styles from './logo.module.css';
import logoImage from '../../../images/misc/logo-main.svg';

export default function Logo() {
  return (
    <img src={logoImage} alt="company logo" className={styles.logo} />
  )
}