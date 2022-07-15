import * as React from "react"
import * as styles from './arrow-button.module.css';
import arrowIcon from '../../../images/icons/arrow.svg';

export default function ArrowButton({ isLeft }) {

  return (
    <div
      className={styles.button}
      type='button'
    >
      <img
      src={arrowIcon}
        style={{transform: isLeft ? 'rotate(180deg)' : ''}}
        className={styles.icon} />
    </div>
  )
}