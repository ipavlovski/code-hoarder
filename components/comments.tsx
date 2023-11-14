'use client'

import Giscus from '@giscus/react'

const repo = 'ipavlovski/code-hoarder'
const repoId = 'R_kgDOKcYV7w'
const category = 'General'
const categoryId = 'DIC_kwDOKcYV784Ca5Qj'

const Comments = () => {
  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping='pathname'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='preferred_color_scheme'
      lang='en'
      loading='lazy' />
  )
}

export default Comments
