import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import styles from './mdx.module.css'

import { images } from '../../content/config'


import { Image } from 'astro:assets'

// note: cover vs. fill, and h-value (200px, 400px, etc.)
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export default function Img(props: ImgProps) {

  console.log(images[props.src!])
  if (images[props.src!]) {
    // console.log(`image ${images[props.src!]} exists`)
    const newPath = images[props.src!]()
    console.log(`new path: ${newPath}`)
  } else {
    console.log(`image ${images[props.src!]} DOES NOT exist`)
  }

  return (
    <div className={styles.imageWrapper}>
      <img
        src={props.src!}
        alt={props.alt!}
        className={styles.imageElement} />
    </div>
  )
}
