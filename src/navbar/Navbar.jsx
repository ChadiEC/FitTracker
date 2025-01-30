import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid ">
          <a class="navbar-brand"><Link to="/">FitTracker</Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/About'>About Us</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/InfoSante'>Information santé</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/Nutrition'>Nutrition</Link></a>
              </li>              
              <li class="nav-item">
                <a class="nav-link"><Link to='/Entrainement'>Entrainement</Link></a>
              </li>  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Inscription
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item"><Link to='/Coach'> Sign up as a coach</Link></a></li>
                  
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item"><Link to='/Client'>Sign up as a client</Link></a></li>
                </ul>
              </li>
           
            </ul>
           
          </div>
        </div>
      </nav>
      </div>
    );
}

export default Navbar;