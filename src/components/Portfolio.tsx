import React from "react";
import siteData from "../../data/siteData.json";

const Portfolio: React.FC = () => {
  const { portfolio } = siteData;

  return (
    <section className="px-6 py-16 bg-neutral dark:bg-dark text-dark dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">ตัวอย่างผลงาน</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-neutral hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
