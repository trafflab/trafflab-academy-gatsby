import * as React from "react"
import * as styles from './contacts-list.module.css';

import IconLink from "./icon-link/icon-link";
import tgImage from '../../../images/icons/telegram-2.svg';
import fbImage from '../../../images/icons/facebook-2.svg';
import ytImage from '../../../images/icons/youtube-2.svg';
import instImage from '../../../images/icons/instagram-2.svg';
import twitterImage from '../../../images/icons/twitter-2.svg';
import linkedinImage from '../../../images/icons/linkedin-2.svg';


export default function ContactsList({ intoRow, isSmall=false }) {
  return (
    <ul style={intoRow && {flexDirection: 'row', height: 'auto'}} className={styles.list}>
      <IconLink isSmall={isSmall} icon={tgImage} linkTo='https://bit.ly/3mpoPpz'/>
      <IconLink isSmall={isSmall} icon={fbImage} linkTo='https://bit.ly/3MzbKow'/>
      <IconLink isSmall={isSmall} icon={linkedinImage} linkTo='https://bit.ly/3mlddUS'/>
      <IconLink isSmall={isSmall} icon={ytImage} linkTo='https://bit.ly/3Mhb3A9'/>
      <IconLink isSmall={isSmall} icon={instImage} linkTo='https://bit.ly/3xPzgJy'/>
      <IconLink isSmall={isSmall} icon={twitterImage} linkTo='https://bit.ly/3xdtWOC
'/>
    </ul>
  )
}