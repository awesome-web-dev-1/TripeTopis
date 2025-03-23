import { Star } from "lucide-react"
import { Link } from 'react-router-dom'
const DestinationSecCard = ({key,imgUrl,title,text,rate,}) => {
  return (
    <li key={key} className="rounded-xl overflow-hidden relative mb-4 md:mb-0">
        <img src={imgUrl} alt="card-image" className="h-full w-full" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-b py-6 pl-6 w-full z-[4]">
        <Link to='' className="text-[22px] xs:mb-2 text-white font-bold block hover:text-neutral-300 max-w-max transition-colors duration-300">{title}</Link>
        <Link to='' className="hover:text-neutral-300 duration-300">{text}</Link>
        </div>
        <div className="absolute top-6 left-7 flex items-center justify-center gap-1 bg-white rounded-full px-2 max-w-max z-[4] ">
        <span>
            <Star size={20} fill="orange" strokeWidth={0} />
        </span>
        <span className="text-cyan-600 text-[14px]">{rate}</span>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-bl from-cyan-900/10 to-neutral-800/60"></div>
    </li>
  )
}

export default DestinationSecCard