import * as React from "react"
import * as styles from './opening-card-list.module.css';
import OpeningCard from "./opening-card/opening-card";
import { CoinIcon, GraphIcon, HeartIcon } from "../../../ui/icons";

export default function OpeningCardList({ cards }) {
  return (
    <ul className={styles.list}>
      <li className={styles.listElement1}><OpeningCard color='purple' icon={CoinIcon} data={cards[0]}/></li>
      <li className={styles.listElement2}><OpeningCard color='blue' icon={GraphIcon} data={cards[1]}/></li>
      <li className={styles.listElement3}><OpeningCard color='red' icon={HeartIcon} data={cards[2]}/></li>
    </ul>
  )
}