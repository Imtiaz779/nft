import Marquee from "react-fast-marquee";
import binance from "../../../assets/Binance.png";
import zerion from "../../../assets/Zerion.png";
import coinbase from "../../../assets/Coinbase.png";
import uniswap from "../../../assets/uniswap-uni-logo.png";

const marqueeItems = [
  { name: "Binance", icon: binance },
  { name: "Zerion", icon: zerion },
  { name: "Coinbase", icon: coinbase },
  { name: "MetaMask", icon: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" },
  { name: "Uniswap", icon: uniswap },
  { name: "Binance", icon: binance },
  { name: "Zerion", icon: zerion },
  { name: "Coinbase", icon: coinbase },
  
];

const MarqueeCrypto = () => {
  return (
    <Marquee gradient={false} speed={40} className="bg-[#0E0E0E] py-8">
      {marqueeItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 mx-12 text-white uppercase text-sm font-medium"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 rounded-md object-contain"
          />
          <span>{item.name}</span>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeCrypto;
