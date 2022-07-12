import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function MediaGatbsyImage({ image, alt }) {

  const handledImg = getImage(image) || image;

  return (
    <GatsbyImage
      image={handledImg}
      objectFit="fill"
      objectPosition={'center'}
      style={{width: "100%", height:"100%"}}
      alt={alt}
      formats={["auto", "webp", "avif"]}
    />
  )
}