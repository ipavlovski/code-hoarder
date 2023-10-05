import { css } from 'styled-system/css'

function ConstructionText() {
  const styles = css({
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'hsl(150, 19%, 92%)',
    fontFamily: 'jakarta',
    letterSpacing: 'widest',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  })

  const flex = css({
    height: '100%',
    display: 'flex',
    flexDir: 'column',
    textAlign: 'center',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    minWidth: 0,
  })

  return (
    <div className={flex}>
      <div className={styles}>
        under construction
      </div>
    </div>
  )
}

export default function App() {
  const styles = css({
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })

  return (
    <div
      style={{ backgroundImage: 'url("../assets/code-herder-exported.png")' }}
      className={styles}>
      <ConstructionText />
    </div>
  )
}
