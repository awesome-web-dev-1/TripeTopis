import { aboutSecItems, aboutSecStatesItems } from "../../constant/data";
import { Check } from 'lucide-react';
import Button from "../common/Button";

const AboutSec = () => {
  return (
    <section className="pt-[120px] md:pt-[150px] pb-[80px]">
      <div className="container grid gap-[50px] md:grid-cols-2 md:items-center">
        {/* Content Section */}
        <div>
          <header>
            <p className="subtitle text-lg font-medium text-gray-500">GET TO KNOW US</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience the World With Tourice</h2>
          </header>

          <p className="mt-4 mb-8 text-lg text-gray-600">
            Tourice was born out of a shared passion for exploration and a desire to create meaningful travel experiences. We believe travel is more than just visiting a place;
          </p>

          {/* Features List */}
          <ul className="grid gap-5 my-8">
            {aboutSecItems.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <Check className="text-primaryClr flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item.text}</p>
              </li>
            ))}
          </ul>

          <Button 
            className="btn-primary my-8" 
            label="Read More" 
            path="about" 
          />

          {/* Stats Section */}
          <ul className="mt-9 flex flex-col xs:flex-row gap-8 md:gap-[73px]">
            {aboutSecStatesItems.map((item) => (
              <li key={item.id} className="flex-1">
                <h3 className="text-[36px] font-semibold text-[#26A59E]">{item.num}</h3>
                <p className="text-gray-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <figure className="mx-auto">
          <img 
            src="/images/about-banner.png" 
            alt="Tourice team members" 
            className="max-w-full h-auto"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default AboutSec;