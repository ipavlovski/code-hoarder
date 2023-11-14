import { css } from 'styled-system/css'

export default function HeaderComponent({ title, category }: { title: string; category: string[] }) {
  const styles = css({
    fontSize: '2rem',
    color: 'gray.400'
  })
  return <div className={styles}>{title} -_-_- {category.join(', ')}</div>
}
