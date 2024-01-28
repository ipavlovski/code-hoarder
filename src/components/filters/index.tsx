import { DatePicker } from './date-picker'
import getTagIcon from 'src/lib/tag-icon'
import { css } from 'styled-system/css'

function IconList({ tags }: { tags: string[] }) {
  const icons = tags.map((v) => getTagIcon(v))

  const styles = css({
    display: 'flex',
    alignItems: 'center',
    gap: '.125rem',
  })

  return (
    <div className={styles}>
      {icons.map((v) => <v.icon />)}
    </div>
  )
}

function DateFilter() {

  return (
    <DatePicker />
  )
}

function CategoryFilter({ categories }: { categories: string[] }) {
  const styles = css({
    color: 'gray.100',
    backgroundColor: 'gray.900',
    outline: 0,
  })

  return (
    <select name='categories' className={styles}>
      {categories.map((v) => <option value={v}>{v}</option>)}
    </select>
  )
}

export function Filters({ tags, categories }: { tags: string[]; categories: string[] }) {
  const styles = css({
    marginBottom: '.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '& input': {
      // borderRadius: '1rem',
      borderBottom: '2px solid white',
      backgroundColor: 'gray.900',
      color: 'gray.200',
      paddingX: '1ch',
      outline: 0,
      borderWidth: '0 0 2px',
      borderColor: 'gray.500',
      transition: 'border-color 300ms ease',
      fontSize: '.9rem',

      '&:focus': {
        borderColor: 'pink.300',
        // outline: '1px dotted white'
      },
    },
  })

  return (
    <div className={styles}>
      <DateFilter />
      {/* <CategoryFilter categories={categories} /> */}
      <input />
      <IconList tags={tags} />
    </div>
  )
}
