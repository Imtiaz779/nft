import React from "react";
import rewardImg from "../../../assets/reward.webp";
import ownershipImg from "../../../assets/ownership.webp";
import transparencyImg from "../../../assets/transparent.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const KeyBenefits = () => {
  const features = [
    {
      title: "Reward",
      image: rewardImg,
      description:
        "All your crypto decisions will be rewarded. The Nodewaves Referral system will reward you when you take care of the users you've invited and for running a node that confirms your reward from them.",
    },
    {
      title: "Ownership",
      image: ownershipImg,
      description:
        "We know that you don't want to remember your Node's data. That's why Nodewaves uses blockchain technology to store your data, making your online presence more private and secure than ever.",
    },
    {
      title: "Transparency",
      image: transparencyImg,
      description:
        "Nodewaves provides a fully transparent system and challenges the crypto world by empowering you with unbiased information and tools so you can make more informed node decisions.",
    },
  ];

  const Card = ({ feature }) => (
    <div className="bg-[#0E0E0E] text-white border border-gray-600 p-6 rounded-lg text-center">
      <img
        src={feature.image}
        alt={feature.title}
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0E0E0E] p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <div className="text-white text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Key Benefits</h1>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} feature={feature} />
          ))}
        </div>

        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1}  modules={[Autoplay]} loop={true}>
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <Card feature={feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
