import * as React from "react"
import * as styles from './contacts-list.module.css';

import IconLink from "./icon-link/icon-link";
import tgImage from '../../../images/icons/telegram.svg';
import fbImage from '../../../images/icons/facebook.svg';
import ytImage from '../../../images/icons/youtube.svg';
import instImage from '../../../images/icons/instagram.svg';
import twitterImage from '../../../images/icons/twitter.svg';

export default function ContactsList() {
  return (
    <ul className={styles.list}>
      <IconLink icon={tgImage} linkTo='https://bit.ly/3mpoPpz'/>
      <IconLink icon={fbImage} linkTo='https://bit.ly/3MzbKow'/>
      <IconLink icon={ytImage} linkTo='https://bit.ly/3Mhb3A9'/>
      <IconLink icon={instImage} linkTo='https://bit.ly/3xPzgJy'/>
      <IconLink icon={twitterImage} linkTo='https://bit.ly/3xdtWOC
'/>
    </ul>
  )
}