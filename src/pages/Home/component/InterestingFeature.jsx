import React from "react";
import { CheckCircle } from "lucide-react"; // Optional icon from lucide-react, or use HeroIcons

const features = [
  "The largest pool is reserved for the NODE rewards at 25%",
  "The largest pool is reserved for the community PoB rewards at 25%",
  "3% of the tokens will be allocated towards metaverse partnerships",
  "The largest pool is reserved for Liquidity pool 15%",
  "Team tokens are locked for 12 months and thereafter vesting for 18 months.",
  "5% of raised funds will go towards talent acquisition and creation of 3D modelling and gaming...",
  "Seed & Private sales 3% tokens are locked for 12 months and thereafter vesting for 18 months.",
];

const InterestingFeatures = () => {
  return (
    <section className="bg-[#0E0E0E] py-20 px-4 md:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Interesting Features
          </h1>
          <p className="text-gray-400 max-w-xl">
            A quick overview of what makes the Nodewaves tokenomics and ecosystem exciting.
          </p>
        </div>

        <ul className="space-y-6">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 mt-1 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InterestingFeatures;
