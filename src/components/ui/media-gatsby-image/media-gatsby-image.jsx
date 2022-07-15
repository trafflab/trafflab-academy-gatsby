import * as React from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

export default function MediaGatsbyImage({ image, image_480, alt }) {
  
  const images =  withArtDirection(getImage(image ? image : image_480), [
    {
      media: '(max-width: 480px)',
      image: getImage(image_480 ? image_480 : image)
    }
  ])

  return (
    <GatsbyImage
      image={(image && image_480 ) ? images : (getImage(image) || getImage(image_480))}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      formats={["auto", "webp", "avif"]}
    />
  )
}