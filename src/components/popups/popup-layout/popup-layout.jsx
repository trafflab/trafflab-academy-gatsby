import * as React from "react"
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../../hooks/use-delay-unmount-state';

export default function PopupLayout({children, isOpen, closeHandler}) {
  
  const shouldMount = useDelayUnmountState(!!isOpen, 350);
  const animation = isOpen ? {animation: 'openAniamtion 0.35s ease-out'} : {animation: 'closeAniamtion 0.35s ease-out forwards'}

  const overlayClose = (evt) => {
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }

  return (
    shouldMount &&
      <section
        onClick={overlayClose}
        className={styles.popupLayout}
        style={animation}
      >
        {children}
      </section>
  )
}