import React from 'react';
import Img1 from '../image/GYM.jpg'
import Img2 from '../image/carou4.jpg'
import Img3 from '../image/carou5.jpg'
import Img4 from '../image/carou6.jpg'
import Img5 from '../image/carou7.jpg'
import Img6 from '../image/carou8.jpg'
import Img7 from '../image/cercle1.jpg'
import Img8 from '../image/cercle2.jpg'
import Img9 from '../image/cercle3.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Carousel from 'react-bootstrap/Carousel';
import '../css/caroussel.css';
import '../css/page.css';

function Home() {
    return (
        <main role="main">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" >
                    <div className="carousel-item active" style={{ height: "700px" }}>
                        <img src={Img1} className="d-block w-100" alt="First slide"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Des entraînements adaptés à votre niveau et vos objectifs</h1>
                                <p>Notre algorithme analyse vos besoins et génère un plan d'entraînement personnalisé pour maximiser vos résultats.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Commencez dès maintenant</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "700px" }}>
                        <img src={Img2} className="d-block w-100" alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Optimisez le suivi de vos clients</h1>
                                <p>Invitez vos clients, créez des plans d'entraînement sur mesure et suivez leur progression en toute simplicité.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">En savoir plus</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "700px" }}>
                        <img src={Img3} className="d-block w-100" alt="Third slide"/>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Alimentation et entraînement : le duo gagnant</h1>
                                <p>Découvrez des suggestions de repas équilibrés en fonction de vos objectifs de performance et de bien-être.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Voir les recommandations</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
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
                        <p><a className="btn btn-secondary" href="#" role="button">Découvrir »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src={Img8}
                             alt="Suivi des performances" width="240" height="240"/>
                        <h2>Analysez vos progrès</h2>
                        <p>Suivez votre évolution avec des statistiques détaillées et atteignez vos objectifs plus
                            rapidement.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">En savoir plus »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src={Img9}
                             alt="Nutrition optimisée" width="240" height="240"/>
                        <h2>Une alimentation optimisée</h2>
                        <p>Recevez des suggestions de repas adaptés à vos entraînements pour de meilleurs résultats.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Voir les conseils »</a></p>
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