import React from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
  Youtube,
} from "lucide-react";
import img from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0E0E0E] via-[#1A1A1A] to-[#0E0E0E] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="mb-4">
            <img src={img} alt="Nodewaves Logo" className="w-48" />
          </div>
          <p className="text-gray-300 max-w-md mb-6">
            Nodewaves enhancing the power of metaverse economy through blockchain
          </p>

          {/* Newsletter Signup */}
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 bg-transparent border border-blue-500 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 border border-hover focus:ring-2  bg-blue-600 text-white rounded-r-md hover:bg-blue-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12">
          {/* Ecosystem */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Ecosystem</h3>
            <ul className="space-y-3">
              {[
                "Node",
                "Play",
                "Move",
                "Proof-Of-Burn",
                "Proof-Of-Stake",
                "Launch Pad",
                "Marketplace",
                "Farming",
                "Promo & Event",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Faq",
                "Privacy Policy",
                "Terms & Condition",
                "Blog",
                "Get $NWS",
                "Contact Support",
                "Smart Contract",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
          <div className="flex flex-wrap gap-3">
  {[Twitter, Instagram, Facebook, Send, MessageCircle, Youtube].map(
    (Icon, index) => (
      <a
        key={index}
        href="#"
        className="group w-12 h-12 border border-blue-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-blue-500"
      >
        <Icon className="w-5 h-5 text-blue-500 transition-colors duration-300 group-hover:text-white" />
      </a>
    )
  )}
</div>


          </div>
        </div>
      </div>
    </footer>
  );
}
