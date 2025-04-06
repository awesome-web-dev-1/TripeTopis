import {Facebook,Instagram,Twitter,Twitch, Phone, MapPin,Mail} from 'lucide-react'
import { footerLinkItems } from '../constant/data'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [year,setYear] = useState(new Date().getFullYear());
  useEffect(()=>{
    setYear(new Date().getFullYear())
  },[])

  return (
    <footer className='bg-[#012E41] pt-[60px]'>
      <div className="container grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="text-white">
          <a href="">
            <img src="/images/footer-logo.png" alt="footer logo image" className='max-w-max' />
          </a>
          <p className='my-[11.5px] max-w-[268.64px]'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing</p>

          <div className="flex gap-3">
            <a href="" className='hover:text-neutral-100/80 transition-colors duration-200'>
              <Facebook />
            </a>
            <a href="" className='hover:text-neutral-100/80 transition-colors duration-200'>
              <Twitter /> 
            </a>
            <a href="" className='hover:text-neutral-100/80 transition-colors duration-200'>
              <Instagram />
            </a>
            <a href="" className='hover:text-neutral-100/80 transition-colors duration-200'>
              <Twitch />
            </a>
          </div>
        </div>

        <ul className="text-white/85">
          <p className='font-semibold text-[24px] text-white'>About</p>
          {footerLinkItems.map((item)=>(
            <li key={item.id} className='mt-4'>
              <a href="#" className='hover:text-white transition-colors'>{item.label}</a>
            </li>
          ))}
        </ul>
        <ul className="text-white/85">
          <p className='font-semibold text-[24px] text-white'>Contact</p>
            <li className='mt-4 max-w-max'>
              <a href="#" className='my-2 hover:text-white transition-colors flex items-center gap-3'>
                <Phone /> +012 345 67890
              </a>
            </li>
            <li className='mt-4 max-w-max'>
              <a href="#" className='my-2 hover:text-white transition-colors flex items-center gap-3'>
                <Mail /> cxqxs@example.com
              </a>
            </li>
            <li className='mt-4 max-w-max'>
              <a href="#" className='my-2 hover:text-white transition-colors flex items-center gap-3'>
              <MapPin /> 123 Street, New York, USA
              </a>
            </li>
        </ul>
      </div>
      <div className="w-full bg-[#F4F4F6]/40 h-[1px] mb-6 mt-[105px]"></div>
      <p className="text-center text-white pb-4">
        &copy; <span>{year}</span> Triptopia. All rights reserved
      </p>
    </footer>
  )
}

export default Footer