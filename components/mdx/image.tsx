import Image from 'next/image'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { css } from 'styled-system/css'

// note: cover vs. fill, and h-value (200px, 400px, etc.)
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export default function Img(props: ImgProps) {
  const styles = css({
    pos: 'relative',
    display: 'block',
    h: '200px',
    w: 'full',
    my: '1rem',
  })

  return (
    <div className={styles}>
      <Image
        src={props.src!}
        alt={props.alt!}
        fill
        style={{ objectFit: 'cover', borderRadius: '8px' }} />
    </div>
  )
}
