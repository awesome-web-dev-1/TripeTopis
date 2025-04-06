import { Link, NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { navItems } from '../constant/data'
import { X } from 'lucide-react'

const Header = () => {
  const location = useLocation();
  const isPagesLayout = location.pathname !== "/";
  const [menuOpen,setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [openDropDown,setOpenDropDown] = useState(null);
  const toggleDropDown = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  
  return (
    <header ref={headerRef} className={`header ${isPagesLayout ? "bg-white" : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>

        {/* Mobile Menu */}
          <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <div className="flex justify-between items-center">
              <Link to="">
              <img src="/images/Logo.png" alt="Logo" />
              </Link>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                  <X size={30} />                  
              </button>
          </div>
          <ul className='mt-6 grid gap-8'>
          {navItems.map((item)=>(
                  <li key={item.id}>
                    <NavLink 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    to={item.path} 
                    className={({ isActive }) => 
                      `hover:text-primaryClr transition-colors duration-300 ${isActive ? "text-primaryClr" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>                
          ))}
          </ul>
          <Link className='mt-auto bg-primaryClr/85 max-w-max text-white px-6 py-4 rounded-lg hover:bg-primaryClr transition-colors duration-300 shadow-lg' to=''>Book Trip</Link>
      </nav>
      

      <ul className='hidden md:flex items-center gap-x-10'>
              {navItems.map((item)=>(
                  <li key={item.id} className="relative">
                        <NavLink  
                          to={item.path} 
                          className={({ isActive }) => 
                            `hover:text-primaryClr transition-colors duration-300 ${isActive ? "text-primaryClr" : ""}`
                          }
                        >
                          {item.label}
                        </NavLink>
                  </li>
              ))}
        </ul>
        <Link className='bg-primaryClr/80 max-w-max text-white px-[30px] h-[50px] rounded-full hover:bg-primaryClr transition-colors duration-300 hidden md:flex md:items-center md:justify-center' to=''>Book Trip</Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={30} />
        </button>
        <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}></div>
      </div>
    </header>
  )
}

export default Header