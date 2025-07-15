import React, { useState } from "react";

const NodeCard = () => {
  const [showFullText, setShowFullText] = useState(false);
  const features = [
    {
      id: "01",
      title: "DAILY REWARDS",
      description:
        "Nodewaves node operators will receive daily rewards for the nodes work",
    },
    {
      id: "02",
      title: "VOTING RIGHTS",
      description:
        "Each node is allowed to vote on proposed changes to the Nodewaves chain and nodes will also hold greater voting power throughout the Nodewaverse",
    },
    {
      id: "03",
      title: "EXCLUSIVE NFTS",
      description:
        "Node owners will also be rewarded with NFT drops and tokens based on their reputational score as node operators and general community members.",
    },
  ];
  const text =
    "Turn your smartphone into a powerful earning machine! Nodewaves Nodes are the individual computers spread across the globe that support the Nodewaves Ecosystem. With a Node license, you can run a node on your device, receive $NWS rewards, unlock exclusive NFTs, and fuel the growth of the Nodewaves Ecosystem.";
  return (
    <div className="min-h-screen bg-[#0E0E0E] p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        {/* Heading Section */}
        <div className="text-white text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            What Is <span className="text-[#E31035]">NODE?</span>
          </h1>
          <p
            className={`text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto ${
              showFullText ? "" : "line-clamp-2"
            }`}
          >
            {text}
          </p>

          <button
            onClick={() => setShowFullText(!showFullText)}
            className="text-[#E31035] text-sm "
          >
            {showFullText ? "Show less" : "Read more"}
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-[#E31035] text-white text-center p-6 rounded-xl transition-all hover:shadow-lg hover:scale-105 duration-300"
            >
              <div className="text-[#E31035] text-3xl font-bold mb-3">
                {feature.id}
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeCard;
