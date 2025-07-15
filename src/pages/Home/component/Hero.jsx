import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import banner1 from "../../../assets/banner1-1.webp";
import banner2 from "../../../assets/marketplace-vid.webp";
import banner3 from "../../../assets/news-1.jpg";
import banner4 from "../../../assets/news-2.jpg";
import arrow from "../../../assets/right-arrow.svg";


// Slide Data
const heroSlides = [
  {
    title: "NODEWAVES",
    subtitle: "NEW",
    tagline: "ERA OF MINING",
    description: "Mining NWS tokens with Founder Node and Lite Node.",
    image: banner1,
  },
  {
    title: "NODEWAVES",
    subtitle: "REVOLUTION",
    tagline: "OF WEB3",
    description:
      "Earn from mining, engage with the community, and shape its future through voting!",
    image: banner2,
  },
  {
    title: "Marketplace",
    subtitle: "Coming Soon",
    tagline: "FUTURE UTILITY",
    description:
      "Unlock real value with our NFT marketplace and staking options.",
    image: banner4,
  },
  {
    title: "DAO Governance",
    subtitle: "Empowered Users",
    tagline: "COMMUNITY FIRST",
    description:
      "Participate in shaping the future of Nodewaves through governance rights.",
    image: banner3, 
  },
  {
    title: "Earn with NFTs",
    subtitle: "Staking Rewards",
    tagline: "REAL UTILITY",
    description:
      "Stake your NFTs and earn passive income while supporting the ecosystem.",
    image: banner2,
  },
];

const Hero = () => {
  return (
 <section className="min-h-screen bg-[#0E0E0E] text-white mt-8">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 5000, disableOnInteraction: true }}
    loop={true}
    effect="fade"
    pagination={{ clickable: true }}
    className="w-full"
  >
    {heroSlides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto w-full items-center justify-center">
            {/* Left */}
            <div className="z-10 order-2 md:order-1 text-center">
              <h1 className="text-4xl font-bold hover:animate-bounce-once ">
                {slide.title}
                <div className="flex items-center justify-center text-red-500 text-2xl gap-3 mt-2 animate-slide-in-right">
                  <img src={arrow} alt="" /> <span className="text-white italic">{slide.subtitle}</span>
                </div>
                <div className="mt-1 animate-slide-in-left">{slide.tagline}</div>
              </h1>
              <p className="text-gray-400 my-6">{slide.description}</p>
              <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
                Connect Wallet
              </button>
            </div>

            {/* Right */}
            {slide.image && (
              <div className="relative z-0 order-1 md:order-2">
                <div className="absolute inset-0 blur-2xl rounded-full scale-110 -z-10 " />
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default Hero;
