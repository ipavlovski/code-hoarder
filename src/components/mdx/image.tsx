import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { css } from 'styled-system/css'

// note: cover vs. fill, and h-value (200px, 400px, etc.)
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export default function Img(props: ImgProps) {
  const styles = css({
    pos: 'relative',
    display: 'block',
    h: '200px',
    w: 'full',
    my: '2rem',
  })

  return (
    <div className={styles}>
      <img
        src={props.src!}
        alt={props.alt!}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          objectFit: 'cover',
          color: 'transparent',
          borderRadius: 8,
        }} />
    </div>
  )
}
