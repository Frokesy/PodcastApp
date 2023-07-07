import React from 'react'
import Head from 'next/head'


const Meta = ({ title }) => {
  return (
    <div>
      <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
  )
}

export default Meta
