import { type PostDataProps } from 'src/content/config'
import getTagIcon from 'src/lib/tag-icon'
import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

function Tags({ tags }: { tags: string[] | undefined }) {
  if (!tags) return

  const styles = css({
    display: 'flex',
    alignItems: 'center',
    gap: '.625rem',
    marginLeft: 'auto',
    '& svg': {
      display: 'inline',
      marginX: '.25rem',
      _hover: {
        cursor: 'pointer',
        color: 'pink.300',
        transition: 'color 300ms ease',
      },
    },
  })

  return (
    <div className={styles}>
      {tags.map((tag) => {
        const tagIcon = getTagIcon(tag)
        return (
          <div>
            <tagIcon.icon key={tag} />
            <span>{tag}</span>
          </div>
        )
      })}
    </div>
  )
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
    fontSize: '1.75rem',
    color: 'gray.100',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: '2rem',
  })
  return <h1 className={styles}>{title}</h1>
}

export function PostTitle({ postData }: { postData: PostDataProps }) {
  const { title, createdAt, updated, category, tags, description } = postData
  return (
    <>
      <Flex gap='.25rem' fontSize='.8rem'>
        <DateCreated createdAt={createdAt} />
        <DateUpdated updated={updated} />
        <Category category={category} />
        <Tags tags={tags} />
      </Flex>
      <Title title={title} />
    </>
  )
}
