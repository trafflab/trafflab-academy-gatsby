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
import PhoneInput from 'react-phone-input-2';

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
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: NONE )
              }
            }
            bookImage_480 {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: CONSTRAINED, placeholder: NONE )
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
    const dataToSend = {
      name: values.name,
      phone: values.phone,
      email: values.email,
    }
    console.log(dataToSend);
    fetch('https://trafflab-api.space/rest-amo.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    })
    .then(data => {
      if (data.ok) {
        setIsLoading(false)
        navigate('/success')
        console.log(data);
        if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form');
        return data.json()
      } else {
        setIsLoading(false)
        navigate('/success')
        console.log(data)
        if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
      }
    })
    .then((data) => console.log(data))
    .catch(err => {
      setIsLoading(false)
      navigate('/success')
      console.log(err)
      if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
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
          <p className={styles.giftText}>Гайд «5 шагов для заработка от 3000$ в месяц в онлайне»<span style={{color: 'var(--c-purple)'}}> в подарок</span></p>
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
                minLength: "15"
              }}
              placeholder='Телефон'
              value={values.phone}
              onChange={handleChange}
              inputClass={styles.phoneInput}
              containerClass={styles.phoneInputContainer}
              buttonClass={styles.phoneInputButton}
              dropdownClass={styles.phoneInputDropdown}
              searchClass={styles.phoneInputSearch}
              disableDropdown={true}
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