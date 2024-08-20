import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import styles from './mdx.module.css'

// note: cover vs. fill, and h-value (200px, 400px, etc.)
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export default function Img(props: ImgProps) {

  return (
    <div className={styles.imageWrapper}>
      <img
        src={props.src!}
        alt={props.alt!}
        className={styles.imageElement} />
    </div>
  )
}
