import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IndustryCard } from "./ui/IndustryCard";

// Swiper Styles
import 'swiper/css';
import "swiper/css/pagination";

const INDUSTRIES = [
  {
    title: "Casinos & Online Gaming",
    description:
      "Comprehensive player verification, geolocation enforcement, and responsible gaming controls to meet jurisdiction requirements worldwide.",
    mainImage: "/assets/industry-gaming.png",
    hoverImageLeft: "/assets/card1-l.png",
    hoverImageRight: "/assets/card1-r.png",
  },
  {
    title: "Cryptocurrency",
    description:
      "Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.",
    mainImage: "/assets/industry-crypto.png",
    hoverImageLeft: "/assets/card2-l.png",
    hoverImageRight: "/assets/card2-r.png",
  },
  {
    title: "Fintech & Payments",
    description:
      "Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.",
    mainImage: "/assets/industry-fintech.png",
    hoverImageLeft: "/assets/card3-l.png",
    hoverImageRight: "/assets/card3-r.png",
  },
];

const Industries: React.FC = () => {
  return (
    <section
      id="industries"
      className="bg-white py-16 md:py-20 px-[20px] md:px-[80px]"
    >
      <div className="mx-auto container">
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

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 cursor-pointer duration-300">
          {INDUSTRIES.map((item, index) => (
            <IndustryCard
              key={index}
              title={item.title}
              description={item.description}
              mainImage={item.mainImage}
              hoverImageLeft={item.hoverImageLeft}
              hoverImageRight={item.hoverImageRight}
            />
          ))}
        </div>

        {/* Mobile Swiper */}
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
                <IndustryCard
                  title={item.title}
                  description={item.description}
                  mainImage={item.mainImage}
                  hoverImageLeft={item.hoverImageLeft}
                  hoverImageRight={item.hoverImageRight}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Industries;
