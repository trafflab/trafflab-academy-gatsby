import * as React from "react"
import * as styles from './opening-card-list.module.css';
import OpeningCard from "./opening-card/opening-card";
import coinIcon from '../../../../images/icons/coin.svg';
import graphIcon from '../../../../images/icons/graph.svg';
import heartIcon from '../../../../images/icons/heart.svg';

export default function OpeningCardList({ cards }) {
  return (
    <ul className={styles.list}>
      <li className={styles.listElement1}><OpeningCard color='purple' icon={coinIcon} data={cards[0]}/></li>
      <li className={styles.listElement2}><OpeningCard color='blue' icon={graphIcon} data={cards[1]}/></li>
      <li className={styles.listElement3}><OpeningCard color='red' icon={heartIcon} data={cards[2]}/></li>
    </ul>
  )
}