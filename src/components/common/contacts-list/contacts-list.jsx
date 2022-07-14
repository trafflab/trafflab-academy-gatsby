import * as React from "react"
import * as styles from './contacts-list.module.css';
import {
  YoutubeIcon,
  TwitterIcon,
  TgIcon,
  InstIcon,
  FbIcon
} from "../../ui/icons";
import IconLink from "./icon-link/icon-link";

export default function ContactsList() {
  return (
    <ul className={styles.list}>
      <IconLink linkTo='https://bit.ly/3mpoPpz'><TgIcon/></IconLink>
      <IconLink linkTo='https://bit.ly/3MzbKow'><FbIcon/></IconLink>
      <IconLink linkTo='https://bit.ly/3Mhb3A9'><YoutubeIcon/></IconLink>
      <IconLink linkTo='https://bit.ly/3xPzgJy'><InstIcon/></IconLink>
      <IconLink linkTo='https://bit.ly/3xdtWOC'><TwitterIcon/></IconLink>
    </ul>
  )
}