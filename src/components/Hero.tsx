import React from "react";
import siteData from "../../data/siteData.json";

const Hero: React.FC = () => {
  const { hero } = siteData;

  return (
    <section className="px-6 py-16 text-center bg-neutral dark:bg-dark text-dark dark:text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.title}</h1>
      <p className="text-lg md:text-xl mb-6">{hero.subtitle}</p>
      <a
        href={hero.ctaLink}
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        {hero.ctaText}
      </a>
    </section>
  );
};

export default Hero;
