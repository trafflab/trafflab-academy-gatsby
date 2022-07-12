import * as React from "react"
import * as styles from './opening.module.css';
import BasicButton from "../../ui/basic-button/basic-button";
import OpeningImage from "./opening-image/opening-image";
import { Is480Context, LangContext } from "../../../utils/contexts";

export default function Opening({openFormPopupHandler}) {
  const is480 = React.useContext(Is480Context);
  const data = React.useContext(LangContext).openingSection;

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{is480 ? data.title480 : data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopupHandler} text={is480 ? data.button480 : data.button}/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}