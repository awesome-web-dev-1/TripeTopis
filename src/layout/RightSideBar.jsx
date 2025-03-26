import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { blogPageItem, blogRightItems, blogTagItems } from "../constant/data";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import RightCard from "../components/blog/RightCard";

const RightSideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const filteredBlogs = blogRightItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <aside className="md:order-1">
      <div className="space-y-8">
        {/* Search Bar */}
        <div className="relative max-w-[450px]">
          <div className="bg-[#F6F6F6] h-[42px] flex items-center rounded-[8px] overflow-hidden">
            <input
              type="search"
              placeholder="Search"
              className="w-full h-full indent-4 bg-transparent outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog posts"
            />
            <button 
              className="absolute top-0 right-0 bottom-0 bg-primaryClr text-white px-3 flex items-center justify-center"
              aria-label="Search"
            >
              <SearchIcon size={18} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Category</h3>
          <ul className="space-y-3">
            {blogPageItem.map((item) => (
              <li key={item.id}>
                <Link 
                  to={`/blog/category/${item.id}`} 
                  className="text-gray-700 hover:text-primaryClr transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Recent News</h3>
          <ul className="space-y-6">
            {filteredBlogs.map((item) => (
              <RightCard
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                date={item.publisheDate}
              />
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {blogTagItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/blog/tag/${item.tag.toLowerCase()}`}
                className="bg-[#F6F6F6] px-4 py-2 rounded-md text-neutral-950 font-medium hover:bg-[#f6f6f690] transition-colors"
              >
                {item.tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Advertisement */}
        <div>
          <img 
            src="/images/ad-img.png" 
            alt="Advertisement" 
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Newsletter */}
        <form onSubmit={handleSubscribe}>
          <h3 className="text-2xl font-semibold mb-4">NewsLetter</h3>
          <input 
            type="email" 
            placeholder="Enter your email here" 
            className="border w-full mb-4 h-10 px-4 bg-white rounded-md outline-none focus:ring-1 focus:ring-primaryClr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button className={'w-full block text-center py-[9px] rounded-[9px] bg-secodaryClr text-white hover:bg-secodaryClr/90 transition-colors duration-200'} label={"Subscribe"} path='' type='submit'/>
        </form>
      </div>
    </aside>
  );
};

export default RightSideBar;