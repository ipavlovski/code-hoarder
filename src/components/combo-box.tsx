import type { HTMLProps, ReactNode } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

/*
BASED ON EXAMPLE FROM FLOATING-UI:
https://codesandbox.io/p/sandbox/admiring-lamport-5wt3yg
*/

type MenuViewProps = { label: string; children?: ReactNode }
function MenuView(itemProps: MenuViewProps & HTMLProps<HTMLButtonElement>) {
  const { label, children, ...props } = itemProps

  const styles = css({
    display: 'block',
  })

  return (
    <>
      <button className={styles}>{label}</button>
      <styled.div ml='1rem'>
        {children}
      </styled.div>
    </>
  )
}

type MenuItemProps = { label: string }
function MenuItem(itemProps: MenuItemProps & HTMLProps<HTMLButtonElement>) {
  const { label, disabled, ...props } = itemProps

  const styles = css({
    display: 'block',
  })

  return <button className={styles}>{label}</button>
}

export default function App() {
  return (
    <>
      <MenuView label='Edit'>
        <MenuItem label='Undo' onClick={() => console.log('Undo')} />
        <MenuItem label='Redo' disabled />
        <MenuItem label='Cut' />
        <MenuView label='Copy as'>
          <MenuItem label='Text' />
          <MenuItem label='Video' />
          <MenuView label='Image'>
            <MenuItem label='.png' />
            <MenuItem label='.jpg' />
            <MenuItem label='.svg' />
            <MenuItem label='.gif' />
          </MenuView>
          <MenuItem label='Audio' />
        </MenuView>
        <MenuView label='Share'>
          <MenuItem label='Mail' />
          <MenuItem label='Instagram' />
        </MenuView>
      </MenuView>
    </>
  )
}
