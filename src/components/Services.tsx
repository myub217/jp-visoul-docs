import React from "react";
import siteData from "../../data/siteData.json";

const Services: React.FC = () => {
  const { services } = siteData;

  return (
    <section className="px-6 py-16 bg-white dark:bg-neutral text-dark dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">บริการของเรา</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral dark:bg-dark rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm mb-4">{service.description}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              เริ่มต้น: {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
