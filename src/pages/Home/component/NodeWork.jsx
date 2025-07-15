import React from "react";
import ourSolutionImg from "../../../assets/Our-Solution.webp";
import scaleSecurityImg from "../../../assets/Our-Solution.webp";
import reliablyProgrammableImg from "../../../assets/Reliably-Programmable.webp";
import permissionlessImg from "../../../assets/Open-Permissionless.webp";

const NodeWork = () => {
  const solutions = [
    {
      id: "oursolution",
      title: "Our Solution",
      image: ourSolutionImg,
      description:
        "Nodewave transforms Polygon L2 scaling solution into a user-friendly product.",
    },
    {
      id: "scalesecurity",
      title: "Scale With Security",
      image: scaleSecurityImg,
      description:
        "Polygon-level security provided by a proven zk-STs solution.",
    },
    {
      id: "reliablyprogrammable",
      title: "Reliably Programmable",
      image: reliablyProgrammableImg,
      description:
        "Enables developers with provable on-chain complexity native support.",
    },
    {
      id: "permissionless",
      title: "Open & Permissionless",
      image: permissionlessImg,
      description:
        "Building towards a decentralized and permissionless network.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <div className="text-white text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            HOW Does NODEWAVES WORK
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => (
            <div
              key={item.id}
              className=" p-6 rounded-md bg-[#0E0E0E] text-white text-center"
            >
              <div className="mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 mx-auto object-contain border border-gray-700 p-2 rounded-md"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeWork;
