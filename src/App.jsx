import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import LogoSection from './components/LogoSection.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  )
}

export default App