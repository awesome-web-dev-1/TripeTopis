import { Facebook, Instagram, Linkedin } from "lucide-react";
import Button from "../components/common/Button";
import TestimonialsSec from "../components/home/TestimonialsSec";
import { aboutPageItems, aboutPageTeamItems } from "../constant/data";

const About = () => {
  return (
    <main>
      {/* About Section */}
      <section className="py-[120px] md:py-[150px]">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="md:order-1">
            <header>
              <p className="subtitle text-lg font-medium text-gray-500">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                See Destinations You'll Love To Visit
              </h2>
            </header>
            
            <p className="text-gray-600 max-w-[575px]">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>

            <ul className="grid gap-8 my-8">
              {aboutPageItems.map((item) => (
                <li key={item.id} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16">
                    <img 
                      src={item.imgUrl} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 max-w-[527px]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <Button 
              label="Book Now" 
              className="btn-primary" 
              path="" 
              aria-label="Book your trip now"
            />
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/images/about-page-img.png" 
              alt="Beautiful travel destinations" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section 
        className="py-[120px] min-h-[750px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about-page-sec-bg.png)" }}
      >
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left">
            Start Saving on Your <br /> Travel Budget
          </h2>
          <div aria-hidden="true">
            <img 
              src="/images/about-page-shape-1.svg" 
              alt="" 
              className="w-24 md:w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TestimonialsSec />

      {/* Team Section */}
      <section className="py-[120px] md:py-[150px]">
        <div className="container">
          <p className="subtitle text-center">OUR TEAM</p>
          <h2 className="text-center">Meet the Creative Minds <br /> Behind Triptopia</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-[60px]">
            {aboutPageTeamItems.map((item) => (
              <div className="relative border rounded-lg py-4" key={item.id}>
                {/* Team Member Image - unchanged */}
                <div className="max-w-max rounded-full overflow-hidden mx-auto border-8 border-white">
                  <img 
                    src={item.imgUrl} 
                    alt={item.name} 
                    className="w-[150px] h-[150px] object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="z-10 text-center mt-4 mb-4">
                  <h3 className="text-white text-[24px] font-semibold">{item.name}</h3>
                  <p className="text-white/70">{item.profession}</p>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                  <a href="#" className="text-white hover:text-white/90" aria-label={`${item.name}'s Instagram`}>
                    <Instagram size={26}/>
                  </a>
                  <a href="#" className="text-white hover:text-white/90" aria-label={`${item.name}'s Facebook`}>
                    <Facebook fill="#fff" strokeWidth={0} size={26} />
                  </a>
                  <a href="#" className="text-white hover:text-white/90" aria-label={`${item.name}'s LinkedIn`}>
                    <Linkedin fill="#fff" strokeWidth={0} size={26}/>
                  </a>
                </div>
                
                <div className="bg-secodaryClr h-[50%] w-full absolute bottom-0 left-0 -z-[1] rounded-b-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;