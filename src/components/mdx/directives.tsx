import type { ReactNode } from 'react'

function CalloutDirective({ contents, id }: { contents: string; id?: string }) {

  return (
    <div style={{ background: 'gray', color: 'white'}}>
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


  return type == 'containerDirective' && name == 'callout'
    ? <CalloutDirective contents={contents} id={id} />
    : (
      <div style={{color: 'red'}}>
        {contents}
      </div>
    )
}



