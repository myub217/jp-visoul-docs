// src/App.tsx
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  )
}

export default App