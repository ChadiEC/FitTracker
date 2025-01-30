import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Footer from './navbar/Footer'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Inscription from './pages/Inscription'
import Coach from './pages/Coach'
import Client from './pages/Client'
import Entrainement from './pages/Entrainement'
import InfoSante from './pages/InfoSante'
import Nutrition from './pages/Nutrition'
import SousEntrainement1 from './pages/SousEntrainement1'
import SousEntrainement2 from './pages/SousEntrainement2'
import SousEntrainement3 from './pages/SousEntrainement3'


function App() {


  return (
    
    <BrowserRouter>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/About' element={<AboutUs />} />
          <Route path='/Coach' element={<Coach />} />
          <Route path='/Client' element={<Client />} />
          <Route path='/Inscription' element={<Inscription />} />
          <Route path='/Entrainement' element={<Entrainement />} />
          <Route path='/InfoSante' element={<InfoSante />} />
          <Route path='/Nutrition' element={<Nutrition />} />
          <Route path='/Entrainement/o1' element={<SousEntrainement1 />} />
          <Route path='/Entrainement/o2' element={<SousEntrainement2 />} />
          <Route path='/Entrainement/o3' element={<SousEntrainement3 />} />

        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
