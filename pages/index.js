import React from 'react'
import Header from '../components/header'
import Bio from '../components/bio'
import Services from '../components/services'
import Tracks from '../components/tracks'
import Footer from '../components/footer'
import Offer from '../components/offer'
import MainNav from '../components/main-nav'
const App = () =>
  <main>
    <MainNav navitems={[
      {url: '#work', label: 'work'},
      {url: '#biography', label: 'about'},
      {url: '#services', label: 'services'},
      {url: '#contact', label: 'Contact'},
    ]}/>
    <Header />
    
    <Tracks/>
    <Bio/>
    <Services/>
    <Footer/> 
  </main>

export default App
