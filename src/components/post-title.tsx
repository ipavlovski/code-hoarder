import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

type Metadata = {
  title: string
  created: string
  updated?: { date: string; comment: string }[]
  category?: string
  tags?: string[]
}

function Tags({ tags }: Pick<Metadata, 'tags'>) {
  return <div>{tags?.join(', ')}</div>
}

function Category({ category }: Pick<Metadata, 'category'>) {
  return <div>{category}</div>
}

function DateUpdated({ updated }: Pick<Metadata, 'updated'>) {
  return <div>{updated?.at(-1)?.date}</div>
}

function DateCreated({ created }: Pick<Metadata, 'created'>) {
  return <div>{created}</div>
}

function Title({ title }: { title: string }) {
  const styles = css({
    fontSize: '1.5rem',
    color: 'gray.100',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: '1rem',
  })
  return <h1 className={styles}>{title}</h1>
}

export default function HeaderComponent({ title, created, updated, category, tags }: Metadata) {
  // const { title, created, updated, category, tags } = metadata

  return (
    <>
      <Flex gap='1rem' fontSize='.8rem'>
        <DateCreated created={created} />
        <DateUpdated updated={updated} />
        <Category category={category} />
        <Tags tags={tags} />
      </Flex>
      <Title title={title} />
    </>
  )
}