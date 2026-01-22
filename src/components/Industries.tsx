import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Define data structure
const INDUSTRIES = [
  {
    title: "Casinos & Online Gaming",
    description:
      "Comprehensive player verification, geolocation enforcement, and responsible gaming controls to meet jurisdiction requirements worldwide.",
    image: "/assets/industry-gaming.png",
    alt: "Casino chips and digital interface",
  },
  {
    title: "Cryptocurrency",
    description:
      "Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.",
    image: "/assets/industry-crypto.png",
    alt: "Mobile crypto trading and coins",
  },
  {
    title: "Fintech & Payments",
    description:
      "Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.",
    image: "/assets/industry-fintech.png",
    alt: "Digital wallet and credit card",
  },
];

const Industries: React.FC = () => {
  const CardContent = ({ item }: { item: (typeof INDUSTRIES)[number] }) => (
    <>
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="mb-4 text-[32px] font-medium font-inter text-[#252525]">
          {item.title}
        </h3>
        <p className="text-[#252525] leading-relaxed font-normal font-inter text-[16px]">
          {item.description}
        </p>
      </div>
    </>
  );

  return (
    <section
      id="industries"
      className="bg-white py-16 md:py-20 px-[20px] md:px-[80px] "
    >
      <div className="mx-auto">
        <div className="mb-12 md:mb-16 text-left">
          <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-medium text-[#142E82]">
            Built for Regulated Industries
          </h2>
          <p className="mt-5 md:mt-6 text-lg md:text-xl text-[#252525] leading-relaxed max-w-3xl">
            Real time AML screening, fraud prevention, and intelligent case
            management. Built for gaming, crypto, and fintech companies that
            demand institutional grade compliance.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-0">
          {INDUSTRIES.map((item, index) => (
            <div
              key={index}
              className="
                  relative 
                  min-h-[420px]
                  h-[460px]
                  overflow-hidden 
                  bg-slate-50 
                  shadow-md 
                  hover:shadow-xl 
                  transition-all  cursor-pointer duration-300
                  p-8 lg:p-10
                "
            >
              <CardContent item={item} />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides={false}
            loop={false}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            className="
                !pb-12
                
                /* 1. Reset Opacity */
                [&_.swiper-pagination-bullet]:opacity-100
                
                [&_.swiper-pagination-bullet]:!rounded-xl
                [&_.swiper-pagination-bullet]:!w-[20px]
                [&_.swiper-pagination-bullet-active]:!w-[29px]
                [&_.swiper-pagination-bullet]:!h-[3px]
                
                /* 3. Colors */
                [&_.swiper-pagination-bullet]:bg-slate-200
                [&_.swiper-pagination-bullet-active]:!bg-[#142E82]
                
                /* 4. Spacing */
                [&_.swiper-pagination-bullet]:mx-[3px]
                
                /* 5. Transitions */
                [&_.swiper-pagination-bullet]:transition-all
                [&_.swiper-pagination-bullet]:duration-300
              "
          >
            {INDUSTRIES.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                        relative 
                        h-[460px]
                        rounded-2xl 
                        overflow-hidden 
                        bg-slate-50 
                        shadow-lg 
                        p-8
                      "
                >
                  <CardContent item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Industries;
