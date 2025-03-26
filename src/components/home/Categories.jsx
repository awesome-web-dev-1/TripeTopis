import React from 'react';
import { CategoriesItem } from '../../constant/data';

const Categories = () => {
  return (
    <section className="bg-bgClr1 py-[120px] md:py-[150px]">
      <div className="container">
        {/* Section Header */}
        <header className="text-center mb-20">
          <p className="subtitle text-lg font-medium text-gray-500">CATEGORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">We Offer The Best Service</h2>
        </header>

        {/* Categories Grid */}
        <ul className="grid gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CategoriesItem.map((item) => (
            <li 
              key={item.id}
              className="border border-neutral-700/25 rounded-xl grid gap-6 p-8 text-center bg-white hover:shadow-lg transition-shadow"
            >
              {/* Category Icon */}
              <div className="mx-auto w-24 h-20 flex items-center justify-center">
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  width={92}
                  height={78}
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Category Content */}
              <div className="grid gap-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;