import Header from './components/header'
import Footer from './components/footer'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Blogs from './pages/blogs'
import AddBlog from './pages/addblogs'
import { blogsdata } from './data/blogs'

import './App.css'
import { useState,useEffect } from 'react'

function App() {
  // const[blogs,setblogs]=useState(blogsdata)
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
  
    return savedBlogs ? JSON.parse(savedBlogs) : blogsdata;
  });
  // const addblog=(newblog)=>{
  //   setblogs([...blogs,newblog])
  // }
  function addblog(newblog) {
    setBlogs((prevBlogs) => [...prevBlogs, newblog]);
  }
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  return (
    <>
      <div className='min-h-screen bg-gray-50 text-gray-800'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} >Home</Route>
          <Route path='/blog' element={<Blogs blogs={blogs} />}>Blog</Route>
          <Route path='add-blog' element={<AddBlog  addblog={addblog}/>}>Add Blogs</Route>
        </Routes>
        <Footer />
      </div>   
      
    </>
  )
}

export default App
