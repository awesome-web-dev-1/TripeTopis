import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Cta from '../components/common/Cta'

const Layout = () => {
  return (
    <>
    <Header />
    <main className='min-h-[100vh]'>
      <Outlet />
    </main>
    <Cta />
    <Footer />
    </>
  )
}

export default Layout