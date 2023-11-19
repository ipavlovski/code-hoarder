import { css, cx } from 'styled-system/css'

function CalloutDirective({ contents, id }: { contents: string; id?: string }) {
  const styles = css({ background: 'slate.800', color: 'slate.200' })

  return (
    <div className={cx('callout', styles)}>
      {contents}
    </div>
  )
}

// :smth[value]{#id}

// ::youtube[Video of a cat in a box]{#01ab2cd3efg}
// { name: 'youtube', children: 'video of a cat in a box', id: string }

// :::some-container{#some-container-id}
// one
// two
// three
// :::

type DirectiveParserParams = {
  name: string
  type: 'textDirective' | 'leafDirective' | 'containerDirective'
  contents: string
  id?: string
}
export default function DirectiveParser({ name, type, contents, id }: DirectiveParserParams) {
  const styles = css({
    color: 'red',
  })

  return type == 'containerDirective' && name == 'callout'
    ? <CalloutDirective contents={contents} id={id} />
    : (
      <div className={styles}>
        {contents}
      </div>
    )
}
