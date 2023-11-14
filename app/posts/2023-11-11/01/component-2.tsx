import { css } from 'styled-system/css'

export default function Component() {
  const styles = css({
    margin: '1rem -3rem',
    paddingX: '3rem',
    backgroundColor: 'slate.800',
  })
  return (
    <div className={styles}>
      <h3>This is a component-2</h3>
    </div>
  )
}
