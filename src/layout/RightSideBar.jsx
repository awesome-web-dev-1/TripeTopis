// src/components/blog/RightSideBar.jsx
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { blogPageItem, blogRightItems, blogTagItems } from "../constant/data";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import RightCard from "../components/blog/RightCard";

const RightSideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const filteredBlogs = blogRightItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="relative">
        <div className="bg-gray-100 h-12 flex items-center rounded-lg overflow-hidden">
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full h-full px-4 bg-transparent outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blog posts"
          />
          <button 
            className="absolute right-0 top-0 bottom-0 bg-primary text-white px-4 flex items-center justify-center"
            aria-label="Search"
          >
            <SearchIcon size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          {blogPageItem.map(item => (
            <li key={item.id}>
              <Link 
                to={`/blog/category/${item.id}`}
                className="text-gray-700 hover:text-primary transition-colors block py-2"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {filteredBlogs.map(item => (
            <RightCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              date={item.publisheDate}
            />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-xl font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogTagItems.map(item => (
            <Link
              key={item.id}
              to={`/blog/tag/${item.tag.toLowerCase()}`}
              className="bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors"
            >
              {item.tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit"
            className="w-full"
            label="Subscribe"
          />
        </form>
      </div>
    </aside>
  );
};

export default RightSideBar;