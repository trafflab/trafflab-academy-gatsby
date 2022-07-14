import * as React from "react"

export default function Icon({ icon, isBig }) {
  return (
    <img
      src={icon}
      style={{
        width: isBig ? '32rem' : '24rem',
        height: isBig ? '32rem' : '24rem'
      }}/>
  )
}