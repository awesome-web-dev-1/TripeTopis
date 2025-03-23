import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsItem } from "../../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSec = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-[120px] md:py-[150px] bg-bgClr1">
      <div className="container">
        <p className="subtitle sm:text-center">Testimonial</p>
        <h2 className="sm:text-center">What Our Client <br /> Said About Us</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mt-[30px]"
        >
          {testimonialsItem.map((item) => (
            <SwiperSlide key={item.id}>
              <li className="border border-primaryClr rounded-lg p-[25px] bg-white my-20">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden max-w-max w-[48px] flex-shrink-0">
                    <img src={item.imgUrl} alt={item.author} className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold">{item.author}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>

                <div className="flex my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} strokeWidth={0} fill="orange" />
                  ))}
                </div>
                <p>{item.text}</p>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10 gap-5">
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className="border border-primaryClr hover:bg-primaryClr text-primaryClr hover:text-white p-4 transition-colors duration-200"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className="border border-primaryClr hover:bg-primaryClr text-primaryClr hover:text-white p-4 transition-colors duration-200"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSec;
