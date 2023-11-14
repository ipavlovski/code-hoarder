import { css } from 'styled-system/css'

function Tags() {
  return <div></div>
}

function Category({ category }: { category: string[] }) {
  return <div>{category.join(', ')}</div>
}

function DateUpdated() {
  return <div></div>
}

function DateCreated() {
  return <div></div>
}

function Title({ title }: { title: string }) {
  const styles = css({
    fontSize: '2rem',
    color: 'gray.100',
    marginBottom: '2rem'
  })
  return <div className={styles}>{title}</div>
}

export default function HeaderComponent(
  { title, category }: { title: string; category: string[] },
) {
  // const styles = css({
  //   fontSize: '2rem',
  //   color: 'gray.100',
  // })
  return (
    <div>
      <div>
        <DateCreated />
        <DateUpdated />
        <Category category={category} />
        <Tags />
      </div>
      <div>
        <Title title={title} />
      </div>
    </div>
  )
}
