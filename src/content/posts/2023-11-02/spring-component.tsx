import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function PullRelease() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })

  // Bind it to a component
  return (
    <animated.div {...bind()}
      style={{ x, y, width: 100, height: 100, backgroundColor: 'pink' }} />
  )
}

export default function Component() {
  return (
    <div>
      <PullRelease />
      <h3>component 1: REACT SPRING TEST</h3>
    </div>
  )
}
