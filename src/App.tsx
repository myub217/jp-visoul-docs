import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import siteData from "./data/siteData.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading animation for 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 bg-white dark:bg-dark text-gray-900 dark:text-white">
        <Navbar />
        <main>
          <section id="hero">
            <Hero data={siteData.hero} />
          </section>
          <section id="services">
            <Services data={siteData.services} />
          </section>
          <section id="portfolio">
            <Portfolio data={siteData.portfolio} />
          </section>
          <section id="contact">
            <Contact data={siteData.contact} />
          </section>
        </main>
        <Footer data={siteData.footer} />
      </div>
    </ThemeProvider>
  );
}

export default App;