import React from "react";
import banner1 from "../../../assets/key-features.svg";

const KeyFeature = () => {
  const slide = {
    title: "Software Nodes",
    description:
      "Buy a license, run the node software to confirm transactions, and earn rewards!",
    image: banner1,
  };

  return (
    <section className="min-h-screen bg-[#0E0E0E] text-white px-4 md:px-8 py-20 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Key Features
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto  items-center justify-between">
        {/* Left - Text Section */}
        <div className="z-10 text-center md:text-left space-y-6 order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {slide.description}
          </p>
          <button className="inline-block text-white bg-[#0E0E0E] border border-[#E31035] hover:border-white hover:bg-blue-700 transition-colors font-medium rounded-lg text-sm px-8 py-3">
            Learn More
          </button>
        </div>

        {/* Right - Image Section */}
        {slide.image && (
          <div className="relative z-0 flex justify-center items-center mb-8 md:mb-0 md:order-none order-first w-full max-w-md">
            <div className="absolute inset-0 blur-2xl rounded-full scale-110 bg-blue-500 opacity-20 -z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-w-md object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyFeature;
