import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import { MediaGatsbyImage } from "../../ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { navigate } from "gatsby";
import useForm from '../../../hooks/use-form';
import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";
import {Loader} from "../../ui";
import PhoneInput from 'react-phone-input-2'

export default function FormPopup({ closeHandler, isOpen }) {
  const data = useStaticQuery(graphql`
  query formPopupQuery {
    markdownRemark {
      frontmatter {
        formPopup {
          title
          subtitle
          bookImage {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
          bookImage_480 {
            childImageSharp {
              gatsbyImageData(quality: 60, layout: CONSTRAINED, placeholder: BLURRED )
            }
          }
        }
      }
    }
  }
`).markdownRemark.frontmatter.formPopup

  const {values, handleChange, isValid, handleReset} = useForm()
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSendClick = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    let data = new FormData()
    data.append('name', values.name);
    data.append('phone', values.phone);
    data.append('email', values.email);

    fetch('/api/amo-crm/amo.php', {
      method: 'POST',
      body: data,
    })
    .then((res ) => {
      if (res.ok) {
        setIsLoading(false)
        navigate('/success')
      } else {
        setIsLoading(false)
        navigate('/success')
        console.log('ph form error')
      }
    })
  }


  React.useEffect(() => {
    handleReset()
  }, [])

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.gift}>
          <div className={styles.imageContainer}><MediaGatsbyImage image={data.bookImage} image_480={data.bookImage_480} /></div>
          <p className={styles.giftText}>Гайд «10 шагов к заработку в валюте»<span style={{color: 'var(--c-purple)'}}> в подарок</span></p>
        </div>

        <form className={styles.form}  >
          <div className={styles.textContainer}>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>
          <div className={styles.inputsContainer}>
            <BasicInput
              name='name'
              placeholder='Имя'
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
              type='text'
            />
            <PhoneInput 
              inputProps={{
                name: 'phone',
                required: true,
              }}
              placeholder='Телефон'
              value={values.phone}
              onChange={handleChange}
              inputClass={styles.phoneInput}
              containerClass={styles.phoneInputContainer}
              buttonClass={styles.phoneInputButton}
              dropdownClass={styles.phoneInputdropdown}
              disableDropdown={false}
            />
            <BasicInput
              name='email'
              placeholder='E-mail'
              value={values.email}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
              type='email'
            />
          </div>
          {
            isLoading
              ? <div style={{alignSelf: 'center'}}><Loader/></div>
              : <div className={styles.buttonContainer}>
                  <BasicButton
                    type="submit"
                    text='Отправить'
                    isActive={isValid}
                    handler={handleSendClick}
                  />
                </div>
          }
        </form>

      </div>
    </PopupLayout>
  )
}