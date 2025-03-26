import { blogSecItems } from "../../constant/data";
import { Link } from 'react-router-dom';

const BlogSec = () => {
  return (
    <section className="py-[120px] md:py-[150px]">
      <div className="container">
        {/* Section Header */}
        <header className="text-center mb-[60px]">
          <p className="subtitle text-lg font-medium text-gray-500 mb-2">Blog & News</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tips and Tricks for Planning <br className="hidden md:inline" /> Your Dream Trip
          </h2>
        </header>

        {/* Blog Posts Grid */}
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogSecItems.map((item) => (
            <li key={item.id} className="group">
              {/* Blog Image */}
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Blog Content */}
              <div className="mt-6">
                <p className="text-gray-500 mb-2">{item.subText}</p>
                <Link 
                  to={`/blog/${item.id}`} 
                  className="text-2xl font-semibold text-gray-800 hover:text-primaryClr transition-colors duration-300"
                >
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSec;