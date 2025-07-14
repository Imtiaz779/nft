import React from "react";
import img1 from "../../../assets/mexc.png";
import img2 from "../../../assets/quickswap.jpg";

const TradeCard = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] p-8 md:p-4 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-red-500">
          <img
            src={img1}
            alt="MEXC"
            className="w-full h-auto object-cover  "
          />
          <div className="p-2 md:p-4 text-center">
            <h2 className="text-white text-xl font-bold mb-2">MEXC Global</h2>
            <p className="text-gray-400 text-sm">
              Trade on MEXC Global with ease and confidence.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-red-500">
          <img
            src={img2}
            alt="QuickSwap"
            className="w-full h-auto object-cover   "
          />
          <div className="p-2 md:p-4 text-center">
            <h2 className="text-white text-xl font-bold mb-2">QuickSwap</h2>
            <p className="text-gray-400 text-sm">
              Experience seamless swaps on QuickSwap v3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeCard;
