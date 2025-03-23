import { Outlet } from "react-router-dom"
import PagesBg from "./PagesBg"

const PagesLayout = () => {
  return (
    <>
    <PagesBg />
    <Outlet />
    </>
  )
}

export default PagesLayout