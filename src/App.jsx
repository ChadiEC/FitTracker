import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import React, {useState} from 'react'
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
import Connexion from './pages/Connexion'
import DashboardClient from "./pages/DashboardClient.jsx";
import DashboardCoach from './pages/DashboardCoach';
import Profile from "./pages/Profile.jsx";
import SideBar from "./navbar/SideBar.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import Settings from "./pages/Settings.jsx";
import Workout from "./pages/Workout.jsx";


/*
* Chadi El-Chami
* Luderson Dominique
* */

function App() {

const [connected,setConnected]=useState(false);



  return (

    <BrowserRouter>

      <Navbar/>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/About' element={<AboutUs />} />
          <Route path='/Coach' element={<Coach setConnected={setConnected} />} />
          <Route path='/Client' element={<Client setConnected={setConnected} />} />
          <Route path='/Inscription' element={<Inscription />} />
          <Route path='/Entrainement' element={<Entrainement />} />
          <Route path='/InfoSante' element={<InfoSante />} />
          <Route path='/Nutrition' element={<Nutrition />} />
          <Route path='/Connexion' element={<Connexion setConnected={setConnected} />} />
          <Route path='/Entrainement/o1' element={<SousEntrainement1 />} />
          <Route path='/Entrainement/o2' element={<SousEntrainement2 />} />
          <Route path='/Entrainement/o3' element={<SousEntrainement3 />} />
          <Route path='/DashboardClient' element={<DashboardClient connected={connected} setConnected={setConnected}/>} />
          <Route path='/DashboardCoach' element={<DashboardCoach connected={connected} setConnected={setConnected}/>} />
          <Route path='/DashboardClient/Profile' element={<Profile connected={connected} setConnected={setConnected}/>} />
          <Route path='/DashboardClient/Workout' element={<Workout connected={connected} setConnected={setConnected}/>} />
          <Route path='/DashboardClient/MealPlan' element={<MealPlan connected={connected} setConnected={setConnected}/>} />
          <Route path='/DashboardClient/Settings' element={<Settings connected={connected} setConnected={setConnected}/>} />
          <Route path='/SideBar' element={<SideBar setConnected={setConnected} />} />

        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
