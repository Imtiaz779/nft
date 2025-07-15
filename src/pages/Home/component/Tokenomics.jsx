import React from 'react';
import chart from "../../../assets/chart-new-3.png";

const Tokenomics = () => {
  return (
    <section className="min-h-screen bg-[#0E0E0E] text-white px-4 md:px-8 py-20 flex flex-col items-center justify-center">
      <div className="text-center max-w-4xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Tokenomics
        </h1>
        <div className="w-full">
          <img
            src={chart}
            alt="Tokenomics Chart"
            className="w-full max-w-3xl mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
