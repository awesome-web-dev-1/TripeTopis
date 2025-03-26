// src/layout/BlogSideSec.jsx
import { Outlet } from 'react-router-dom'
import RightSideBar from '../layout/RightSideBar'

const BlogSideSec = () => {
  return (
    <section className='container py-[120px] md:py-[150px]'>
      <div className='grid md:grid-cols-[1fr,0.4fr] gap-8 lg:gap-12'>
        <Outlet />
        <RightSideBar />
      </div>
    </section>
  )
}

export default BlogSideSec