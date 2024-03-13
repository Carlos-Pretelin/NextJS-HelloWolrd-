import React from 'react'

const articleid = ( {params}: {params: {articleid: string}} ) => {
  return (
    <div>articleid este es el id: {params.articleid}</div>
  )
}

export default articleid