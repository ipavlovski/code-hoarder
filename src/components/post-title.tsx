import { type PostDataProps } from 'src/content/config'
import getTagIcon from 'src/lib/tag-icon'
import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

function Tags({ tags }: { tags: PostDataProps['tags'] }) {
  return <div>{tags?.join(', ')}</div>
}

function Category({ category }: { category: PostDataProps['category'] }) {
  return <div>{category}</div>
}

function DateUpdated({ updated }: { updated: PostDataProps['updated'] }) {
  return <div>{updated?.at(-1)?.date}</div>
}

function DateCreated({ createdAt }: { createdAt: PostDataProps['createdAt'] }) {
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

export function PostTitle({ postData }: { postData: PostDataProps }) {
  const { title, createdAt, updated, category, tags, description } = postData
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
