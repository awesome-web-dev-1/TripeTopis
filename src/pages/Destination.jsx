import React from 'react';
import { destinationCard2Item, destinationCardItems } from '../constant/data';
import DestinationSecCard from '../components/sections/DestinationSecCard';
import DestinationSecCard2 from '../components/sections/DestinationSecCard2';

const Destination = () => {
  return (
    <>
      {/* First Section: Destination Cards */}
      <section className='py-[120px]'>
        <div className="container">
          <ul className='grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
            {destinationCardItems.map((item) => (
              <DestinationSecCard 
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                text={item.text}
                rate={item.rate}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Second Section: Experience Section */}
      <section className='py-[120px] bg-gray-50'>
        <div className="container">
          <header className="text-center mb-[60px]">
            <p className="subtitle text-lg font-medium text-gray-500">GET TO KNOW US</p>
            <h2 className='text-3xl md:text-4xl font-bold mt-2'>
              Experience the World <br /> With Triptopia
            </h2>
            <p className='mt-4 text-gray-600 max-w-[612px] mx-auto'>
              Our dating website offers a range of features and benefits that make finding love online simple and enjoyable. With our advanced matching algorithm
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <ul className='grid grid-cols-2 gap-6 md:order-1'>
              {destinationCard2Item.map((item) => (
                <DestinationSecCard2 
                  key={item.id}
                  imgUrl={item.iconImg}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </ul>

            {/* Banner Image */}
            <div className="mx-auto">
              <img 
                src="/images/destination-page-banner.png" 
                alt="Travel destinations showcase"
                className="max-w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;