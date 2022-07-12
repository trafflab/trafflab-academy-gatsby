import * as React from "react"
import * as styles from './countries-marquee.module.css';
import Marquee from "react-fast-marquee";

export default function CountriesMarquee() {

  return (
    <section className={styles.countriesMarquee}>
      <div className={styles.content}>
        <Marquee gradient={false} >
          <ul className={styles.list}>
            <li className={styles.listElement}>
              <p className={styles.countryName}>Ukraine</p>
            </li>
            <li className={styles.listElement}>
              <div className={styles.dot} />
            </li>
            <li className={styles.listElement}>
              <p className={styles.countryName}>Cyprus</p>
            </li>
            <li className={styles.listElement}>
              <div className={styles.dot} />
            </li>
            <li className={styles.listElement}>
              <p className={styles.countryName}>France</p>
            </li>
            <li className={styles.listElement}>
              <div className={styles.dot} />
            </li>
            <li className={styles.listElement}>
              <p className={styles.countryName}>Russia</p>
            </li>
            <li className={styles.listElement}>
              <div className={styles.dot} />
            </li>
            <li className={styles.listElement}>
              <p className={styles.countryName}>Indonesia</p>
            </li>
            <li className={styles.listElement}>
              <div className={styles.dot} />
            </li>
          </ul>
        </Marquee>
      </div>
    </section>
  )
}