import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'
import getTagIcon from 'src/lib/tag-icon'

type Metadata = {
  createdAt: string
  title: string
  description?: string
  updated?: { date: string; note: string }[]
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

function DateCreated({ createdAt }: Pick<Metadata, 'createdAt'>) {
  return <div>{createdAt}</div>
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

export default function HeaderComponent(props: Metadata) {
  const { title, createdAt, updated, category, tags, description } = props
  return (
    <>
      <Flex gap='1rem' fontSize='.8rem'>
        <DateCreated createdAt={createdAt} />
        <DateUpdated updated={updated} />
        <Category category={category} />
        <Tags tags={tags} />
      </Flex>
      <Title title={title} />
    </>
  )
}
