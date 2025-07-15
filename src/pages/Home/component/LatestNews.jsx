import React from "react";
import img1 from "../../../assets/11.webp";
import img2 from "../../../assets/22.webp";
import img3 from "../../../assets/33.webp";

const LatestNews = () => {
  const articles = [
    {
      image: img1,
      shortTitle: "NodeWaves May 2025 Promo Campaign: Unlock Exclusive Rewards",
      description:
        "NodeWaves is thrilled to announce its May 2025 Promo Campaign, offering participants the chance to earn substantial rewards through active engagement in our ecosystem...",
      buttonText: "Read More",
    },
    {
      image: img2,
      shortTitle:
        "Founder Node License Now Only $600 – Unlock Massive Long-Term Reward...",
      description:
        "Historic Move: Price Reduced, Opportunity Expanded. For the first time in NodeWaves history, we are thrilled to announce a limited-time reduction in the cost of the Founder Node License...",
      buttonText: "Read More",
    },
    {
      image: img3,
      shortTitle:
        "Nodewaves Doubles Light Node Rewards After 5,000+ Milestone: 2.6 Milli...",
      description:
        "In a landmark achievement, NodeWaves has officially crossed over 5,000 LightNode owners, marking a major evolution in the platform’s mining rewards system...",
      buttonText: "Read More",
    },
  ];

  return (
    <section className="bg-[#0E0E0E] py-20 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest News
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 "
            >
              <img
                src={article.image}
                alt={article.shortTitle}
                className="w-full  object-cover transition-all duration-300 transform hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {article.shortTitle}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {article.description}
                </p>
                <button className="text-red-500 hover:underline text-sm font-medium">
                  {article.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
