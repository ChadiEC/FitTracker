import React from 'react';
import Img4 from '../image/carou6.jpg'
import Img5 from '../image/carou7.jpg'
import Img6 from '../image/carou8.jpg'
import Img7 from '../image/cercle1.jpg'
import Img8 from '../image/cercle2.jpg'
import Img9 from '../image/cercle3.jpg'
import "../css/LandingPage.css";

/*
* Luderson Dominique
* */

import '../css/page.css';
import {useNavigate} from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
      <main role="main">
        <div className="landingPage">
          <h1>
            <span>sweat now</span> shine stronger longer
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt ducimus eos esse, est exercitationem inventore porro similique tempore totam? Accusamus corporis cupiditate fugit iure, laborum optio provident sit vero.</p>
          <button onClick={() => navigate("/Client")}>Commencez Maintenant</button>
        </div>

        <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>

        <div className="container d-flex flex-column align-items-center">

          <div className="row featurette text-center text-black">
            <div className="col-md-7">
              <h2 className="featurette-heading">Un programme conçu pour vous. <span className="text-muted">Adapté à votre rythme et vos objectifs.</span>
              </h2>

              <h3 className="lead">Obtenez un plan d'entraînement sur-mesure basé sur votre niveau et vos
                objectifs. Chaque séance est adaptée pour maximiser vos performances et votre
                progression..</h3>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={Img4}
                   alt="500x500"/>
            </div>
          </div>
          <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
          <div className="row bg-white text-center">
            <div className="col-lg-4">
              <img className="rounded-circle"
                   src={Img7}
                   alt="Plan d'entraînement" width="240" height="240"/>
              <h2>Des entraînements adaptés</h2>
              <p>Générez un programme sur mesure en fonction de votre niveau et de vos objectifs.</p>
              <p><a className="btn btn-secondary" role="button">Découvrir »</a></p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle"
                   src={Img8}
                   alt="Suivi des performances" width="240" height="240"/>
              <h2>Analysez vos progrès</h2>
              <p>Suivez votre évolution avec des statistiques détaillées et atteignez vos objectifs plus
                rapidement.</p>
              <p><a className="btn btn-secondary"  role="button">En savoir plus »</a></p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle"
                   src={Img9}
                   alt="Nutrition optimisée" width="240" height="240"/>
              <h2>Une alimentation optimisée</h2>
              <p>Recevez des suggestions de repas adaptés à vos entraînements pour de meilleurs résultats.</p>
              <p><a className="btn btn-secondary" role="button">Voir les conseils »</a></p>
            </div>
          </div>


          <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
          <div className="row featurette bg-white text-black text-center">
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={Img5}
                   alt="500x500"/>
            </div>
            <div className="col-md-7">
              <h2 className="featurette-heading">Un espace dédié aux coachs. <span
                  className="text-muted">Simplifiez la gestion de vos clients.</span></h2>
              <h3 className="lead">Invitez vos clients, attribuez-leur des plans personnalisés et suivez leurs
                progrès en temps réel avec notre interface intuitive.</h3>
            </div>

          </div>
          <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
          <div className="row featurette bg-white text-black-20 text-center text-black">
            <div className="col-md-7">
              <h2 className="featurette-heading">Mangez mieux, performez mieux. <span className="text-muted">Une nutrition adaptée à vos objectifs.</span>
              </h2>
              <h3 className="lead">Optimisez votre alimentation avec des recommandations basées sur vos
                besoins énergétiques et vos objectifs de remise en forme.</h3>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={Img6}
                   alt="500x500"/>
            </div>
          </div>
        </div>

        <footer className="container text-center mt-5">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>&copy; 2024 Your Company · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
      </main>


  );
}

export default Home;