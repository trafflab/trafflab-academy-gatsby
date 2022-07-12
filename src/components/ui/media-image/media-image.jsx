import * as React from "react"
import plug from '../../../images/misc/plug.svg';

export default function MediaImage({ image, image_480, image_webp, image_480_webp, no480, alt }) {
  return (
    <picture style={{height: "100%"}}>
  
      {(image_480_webp || no480) && <source media='(max-width: 480px)' type="image/webp" srcSet={no480 ? plug : image_480_webp} />}
      <source type="image/webp" srcSet={image_webp} />
        
      {(image_480 || no480) && <source media='(max-width: 480px)' srcSet={no480 ? plug : image_480} />}
      <img src={image} alt={alt} style={{height: '100%', width: '100%'}} />

    </picture>
  )
}