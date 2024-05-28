import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Blog from '../components/blog';


const BlogPage = () => {
  return (
    <div>
      {<Header/>}
      {<Blog/>}
      {<Footer/>}
    </div>
  )
}

export default BlogPage
