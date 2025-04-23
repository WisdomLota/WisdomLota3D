import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
    </>
  )
}

export default App