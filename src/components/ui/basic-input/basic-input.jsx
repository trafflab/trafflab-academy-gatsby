import * as React from "react"
import * as styles from './basic-input.module.css';

export default function BasicInput({
  placeholder,
  value,
  type = 'text',
  onChange,
  maxLength,
  minLength,
  name,
  isRequired
}) {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      required={isRequired}
    />
  )
}