import { Facebook, Instagram, Linkedin } from "lucide-react"
import Button from "../components/common/Button"
import TestimonialsSec from "../components/home/TestimonialsSec"
import { aboutPageItems, aboutPageTeamItems } from "../constant/data"

const About = () => {
  return (
    <>
      <section className="py-[120px] md:py-[150px]">
        <div className="container grid md:grid-cols-2 gap-5">
          <div className="md:order-1">
            <p className="subtitle">ABOUT US</p>
            <h2 className="mt-2 mb-4">See Destinations You’ll Love To Visit</h2>
            <p className="max-w-[575px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some There are many variations of passages of Lorem Ipsum available.
            </p>

            <ul className="grid gap-8 my-8">
              {aboutPageItems.map((item)=>(
                <li key={item.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <div className="">
                    <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
                    <p className="max-w-[527px]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button label="Book Now" className="btn-primary" path='' />
          </div>

          <div className="">
            <img src="/images/about-page-img.png" alt="banner" />
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-[url(/images/about-page-sec-bg.png)] min-h-[750px] bg-center bg-cover place-content-end">
        <div className="container flex justify-between items-center">
          <h2 className="text-white">Start Saving on Your <br /> Travel Budget</h2>
          <div className="">
            <img src="/images/about-page-shape-1.svg" alt="shape" />
          </div>
        </div>
      </section>

      <TestimonialsSec />

      <section className="py-[120px] md:py-[150px]">
        <div className="container">
          <p className="subtitle text-center">OUR TEAM</p>
          <h2 className="text-center">Meet the Creative Minds <br /> Behind Triptopia</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-[60px]">
            {aboutPageTeamItems.map((item)=>(
              <div className="relative border rounded-lg py-4" key={item.id}>
                <div className="max-w-max rounded-full overflow-hidden mx-auto border-8 border-white">
                  <img src={item.imgUrl} alt={item.name} className="w-[150px]"  />
                </div>
                <div className="z-10 text-center mt-4 mb-4">
                  <h3 className="text-white text-[24px] font-semibold">{item.name}</h3>
                  <p className="text-white/70">{item.profession}</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <a href="#" className="text-white hover:text-white/90">
                    <Instagram size={26}/>
                  </a>
                  <a href="#" className="text-white hover:text-white/90">
                    <Facebook fill="#fff" strokeWidth={0} size={26} />
                  </a>
                  <a href="#" className="text-white hover:text-white/90">
                    <Linkedin fill="#fff" strokeWidth={0} size={26}/>
                  </a>
                </div>
                <div className="bg-secodaryClr h-[50%] w-full absolute bottom-0 left-0 -z-[1]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About