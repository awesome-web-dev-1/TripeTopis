import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative pt-[120px] md:pt-[150px] pb-[80px]">
      <div className="container grid gap-[50px] md:grid-cols-[0.8fr,1fr] md:gap-5 md:items-center">
        {/* Content Section */}
        <div className="xs:max-w-[550px] xs:mx-auto text-center md:text-left md:max-w-none">
          <h1>Explore Your World with Tourice</h1>
          <p className="mt-4 mb-10 text-lg text-gray-600">
            Experience bespoke itineraries and unparalleled service. Explore the world without breaking the bank.
          </p>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <Button 
              label="Contact Us" 
              className="btn-primary" 
              path="contact" 
            />
            <Button 
              label="Get Quote" 
              className="btn-secondary" 
              path="" 
            />
          </div>
        </div>

        {/* Image Section */}
        <figure className="mx-auto">
          <img 
            src="/images/hero-banner.png" 
            alt="Travelers enjoying a tour" 
            className="max-w-full h-auto"
            loading="eager"
            width={550}
            height={700}
          />
        </figure>
      </div>

      {/* Background Image */}
      <img 
        src="/images/hero-bg-img.png" 
        alt="Decorative background" 
        className="absolute top-0 left-0 w-full h-[100vh] object-cover opacity-10 -z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;