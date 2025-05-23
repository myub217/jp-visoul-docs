import React from "react";
import siteData from "../data/siteData.json"; // ตรวจสอบให้ชื่อไฟล์ตรงกับที่มีจริง

// ประเภทของข้อมูลผลงาน
type PortfolioItem = {
  title: string
  description: string
  image: string
}

const Portfolio = () => {
  const { portfolio }: { portfolio: PortfolioItem[] } = siteData;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="bg-gray-50 dark:bg-gray-800 py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="portfolio-title"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          ตัวอย่างผลงาน
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={item.image || "/placeholder.jpg"}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;