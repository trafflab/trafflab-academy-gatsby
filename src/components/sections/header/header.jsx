import * as React from "react"
import * as styles from './header.module.css';
import Logo from "../../common/logo/logo";
import NavList from "../../common/nav-list/nav-list";
import { Link } from "gatsby";

export default function Header({ openNavPopupHandler }) {

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to={`/`}><Logo /></Link>
        <div className={styles.navContainer}><NavList /></div>
        <div className={styles.burgerContainer}>
          <button onClick={openNavPopupHandler} type="button" className={styles.burgerButton}></button>
        </div>

      </div>

    </header>
  )
}