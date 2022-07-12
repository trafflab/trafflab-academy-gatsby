import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import MediaImage from "../../ui/media-image/media-image";

import image from '../../../images/form-popup/image.png';
import image_480 from '../../../images/form-popup/image480.png';
import image_webp from '../../../images/form-popup/image.webp';
import image_480_webp from '../../../images/form-popup/image480.webp';

import { LangContext, MessagesContext } from '../../../utils/contexts';
import useForm from '../../../hooks/use-form';
import { sendFormToTg } from "../../../utils/api";
import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";

export default function FormPopup({ closeHandler, isOpen }) {

  const {values, handleChange, isValid, handleReset} = useForm()
  const [momentWindow, setMomentWindow] = React.useState({});

  const data = React.useContext(LangContext).formPopup;
  const successMessageHandler = React.useContext(MessagesContext)

  const handleSendClick = () => {
    sendFormToTg(values.name, values.tg)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset()
          handleReset({name: '', tg: ''})
          momentWindow.yaCounter89406166.reachGoal('tg_form_click');

        }
      })
  }

  React.useEffect(() => {
    setMomentWindow(window)
    values.phone = ''
  }, [])

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.imageContainer}><MediaImage image_webp={image_webp} image_480_webp={image_480_webp} image={image} image_480={image_480} /></div>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
              <BasicInput
                name='name'
                placeholder={data.nameInput}
                value={values.name}
                onChange={handleChange}
                minLength={1}
                isRequired={true}
              />
              <BasicInput
                name='tg'
                placeholder='Telegram'
                value={values.tg}
                onChange={handleChange}
                minLength={1}
                isRequired={true}
              />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text={data.button480}
              isActive={isValid}
              handler={handleSendClick}
            />
            <p className={styles.agreement}>{data.agreement}</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}