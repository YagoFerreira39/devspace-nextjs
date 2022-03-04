import React from 'react'
import Header from './Header'

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className=''>
      <head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </head>
      <Header />
      <main className='container mx-auto my-7'>
        {children}
      </main>
    </div>
  )
}

Layout.defaultProps = {
  title: "DevSpace",
  keywords: "Development, programming",
  description: "The best info & news in development"
}

export default Layout