import * as React from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

export default function MediaGatsbyImage({ image, image_480, alt }) {
  const images =  withArtDirection(getImage(image), [
    {
      media: '(max-width: 480px)',
      image: getImage(image_480)
    }
  ])
  return (
    <GatsbyImage
      image={images}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      formats={["auto", "webp", "avif"]}
    />
  )
}