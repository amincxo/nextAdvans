import Head from 'next/head'
import React from 'react'

function next({data}) {
    console.log(data)
  return (
      <div>
        <Head>
            <title>{data.title}</title>
            <meta name='description' content={data.description}  />
        </Head>
        <h1>
            next page {data.name}
        </h1>
    </div>
  )
}

export default next


export async function getServerSideProps() {
    
    return {
        props: {
            data: {name: "amin" , title: " amin Page", description : "good developer" }
        }
    }
}