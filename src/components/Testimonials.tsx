import React from "react";
import siteData from "../../data/siteData.json";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const { testimonials = [] } = siteData;

  if (testimonials.length === 0) return null;

  return (
    <section
      className="px-6 py-16 bg-white dark:bg-neutral text-dark dark:text-white"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-3xl font-bold text-center mb-12"
      >
        รีวิวจากลูกค้า
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="bg-neutral dark:bg-dark p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-sm italic mb-4">"{testimonial.quote}"</p>

            <div className="flex items-center">
              <img
                src={testimonial.image || "/default-avatar.png"}
                alt={`ภาพของ ${testimonial.name}`}
                loading="lazy"
                className="w-10 h-10 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;