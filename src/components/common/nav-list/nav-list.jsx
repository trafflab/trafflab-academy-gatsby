import * as React from "react"
import * as styles from './nav-list.module.css';
import NavListElement from "./nav-list-element/nav-list-element";

export default function NavList({ isFooter=false }) {
  return (
    <nav className={styles.nav}>
      <ul style={{color: [isFooter ? 'var(--c-white)' : 'var(--c-gray-2)']}} className={styles.list}>
        <NavListElement text={'Вебинар'} linkTo={'/#itIsForYou'} isFooter={isFooter} />
        <NavListElement text={'Что узнаешь'} linkTo={'/#imortantThings'} isFooter={isFooter} />
        <NavListElement text={'Для кого'} linkTo={'/#perfectChoice'} isFooter={isFooter} />
        <NavListElement text={'Ведущий'} linkTo={'/#aboutUs'} isFooter={isFooter} />
        { !isFooter && <NavListElement text={'Контакты'} linkTo={'/#footer'} isFooter={isFooter} />}
      </ul>
    </nav>
  )
}