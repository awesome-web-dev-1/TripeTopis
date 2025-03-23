import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { blogPageItem, blogRightItems, blogTagItems } from "../constant/data";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import RightCard from "../components/blog/RightCard";

const RightSideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogRightItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className='md:order-1'>
              <div className="container">
                  <div className="bg-[#F6F6F6] h-[42px] flex items-center relative rounded-[8px] overflow-hidden max-w-[450px] w-full">
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full indent-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="absolute top-0 right-0 bottom-0 bg-primaryClr text-white px-3">
                    <SearchIcon />
                  </button>
              </div>

              <ul className='flex flex-col gap-4 my-8'>
                <h3 className='text-[24px] font-semibold'>Category</h3>
                {blogPageItem.map((item)=>(
                  <li key={item.id}>
                    <Link to=''>{item.text}</Link>
                  </li>
                ))}
              </ul>


              <ul className="grid gap-10 mb-8">
                <h3 className="text-[24px] font-semibold">Recent News</h3>
                {filteredBlogs.map((item) => (
                  <RightCard
                    imgUrl={item.imgUrl}
                    title={item.title}
                    date={item.publisheDate}
                    key={item.id}
                  />
                ))}
              </ul>


              <div className=''>
                <h3 className='text-[24px] font-semibold mb-10'>Tags</h3>
                <div className="flex flex-wrap gap-4">
                {blogTagItems.map((item)=>(
                  <div key={item.id} className='grid'>
                    <Link to='' className='bg-[#F6F6F6] px-[17px] py-2 rounded-md text-neutral-950 font-semibold hover:bg-[#f6f6f690] transition-colors'>{item.tag}</Link>
                    </div>
                ))}
                </div>
              </div>

              <div className="mt-5">
                <img src="/images/ad-img.png" alt="ad banner" />
              </div>

              <div className="mt-8">
                <h3 className='text-[24px] font-semibold mb-4'>NewsLetter</h3>
                <input type="email" placeholder='Enter your email here' className='border w-full mb-8 h-[40px] indent-4 bg-white' required />
                <Button className={'w-full block text-center py-[9px] rounded-[9px] bg-secodaryClr text-white hover:bg-secodaryClr/90 transition-colors duration-200'} label={"Subscribe"} path='' />
              </div>
          </div>
    </section>
  )
}

export default RightSideBar