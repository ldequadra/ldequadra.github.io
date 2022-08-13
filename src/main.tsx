import React from 'react'
import ReactDOM from 'react-dom/client'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Latest from './components/Latest'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/global.css'
import Projects from './components/Projects'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <Navigation />
    <Hero />
    <About />
    <Latest />
    <Projects />
    <Contact />
    <Footer />

  </React.StrictMode>
)
