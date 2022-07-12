import * as React from "react"
import * as styles from './lang-list.module.css';
import { navigate } from "gatsby";
import { changeRelativeUrlLang } from "../../../utils/utils";

export default function LangList() {
  const [lang, setLang] = React.useState('');

  const handleChange = (evt) => {
    localStorage.setItem('lang', evt.target.value);
    setLang(evt.target.value)
    navigate(changeRelativeUrlLang(evt.target.value))
  }

  React.useEffect(() => {
    setLang(localStorage.getItem('lang'));
  })

  return (
    <div className={styles.langList}>
      <select value={lang} onChange={handleChange} className={styles.select}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
        <option value='ru'>RU</option>
      </select>
    </div>
  )
}
