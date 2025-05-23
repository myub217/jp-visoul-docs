import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import siteData from './data/siteData.json'

function App() {
  const [data, setData] = useState(siteData)

  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <Hero data={data.hero} />
      <Services data={data.services} />
      <Footer data={data.footer} />
    </div>
  )
}

export default App