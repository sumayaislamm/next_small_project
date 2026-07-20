import React from 'react'

const SlugPage = async ({params} : {params : Promise<{slugs : string}>}) => {

  const {slugs} = await params;
  return (
    <div>Slugs page number : {slugs}</div>
  )
}

export default SlugPage;
