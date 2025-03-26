import { blogSecItems } from "../../constant/data"
import { Link } from 'react-router-dom'
const BlogSec = () => {
  return (
    <section className="py-[120px] md:py-[150px]">
        <div className="container">
            <p className="subtitle md:text-center">Blog & News</p>
            <h2 className="md:text-center">Tips and Tricks for Planning <br /> Your Dream Trip</h2>

            <ul className="mt-[60px] grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {blogSecItems.map((item)=>(
                    <li key={item.id}>
                        <div className="rounded-[12px] overflow-hidden">
                          <img src={item.imgUrl} alt={item.title} className="w-full h-full" />
                        </div>

                        <div className="">
                          <p className="mt-6 mb-2">{item.subText}</p>
                          <Link to='' className="text-[24px] font-semibold hover:text-primaryClr transition-colors duration-300">{item.title}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default BlogSec