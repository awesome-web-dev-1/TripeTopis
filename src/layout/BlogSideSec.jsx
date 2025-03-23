import React from 'react'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'

const BlogSideSec = () => {
  return (
    <section className='grid md:grid-cols-[1fr,0.5fr] container py-[120px] gap-20 md:gap-10 md:py-[150px]'>
        <RightSideBar />
        <Outlet />
    </section>
  )
}

export default BlogSideSec