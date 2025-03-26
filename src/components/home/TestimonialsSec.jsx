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
        {/* Section Header */}
        <header className="text-center mb-12">
          <p className="subtitle text-lg font-medium text-gray-500">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our Client <br className="hidden sm:block" /> Said About Us
          </h2>
        </header>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="!pb-16"
          >
            {testimonialsItem.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border border-primaryClr/30 rounded-lg p-6 bg-white h-full transition-all hover:shadow-lg">
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full">
                      <img 
                        src={item.imgUrl} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.author}</h3>
                      <p className="text-sm text-gray-500">{item.info}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} strokeWidth={0} fill="currentColor" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()} 
              className="border border-primaryClr rounded-full w-12 h-12 flex items-center justify-center hover:bg-primaryClr hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primaryClr/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()} 
              className="border border-primaryClr rounded-full w-12 h-12 flex items-center justify-center hover:bg-primaryClr hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primaryClr/50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSec;