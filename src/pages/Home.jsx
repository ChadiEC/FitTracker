import React from 'react';
import Img1 from '../image/greyBackground.jpg'
import Img2 from '../image/A_black_image.jpg'
import  img from '../image/inscriptionImange.jpg'
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
                        <img src="" className="d-block w-100" alt="First slide"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "700px" }}>
                        <img src="https://via.placeholder.com/1920x600" className="d-block w-100" alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "700px" }}>
                        <img src="https://via.placeholder.com/1920x600" className="d-block w-100" alt="Third slide"/>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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

                <div className="row featurette text-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src={img}
                             alt="500x500"/>
                    </div>
                </div>
                <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
                <div className="row bg-white">
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                            elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus
                            commodo, tortor mauris condimentum nibh.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
                            id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                            condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                </div>


                <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
                <div className="row featurette bg-white text-black text-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one. <span
                            className="text-muted">Checkmate.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="https://via.placeholder.com/500"
                             alt="500x500"/>
                    </div>
                </div>
                <hr className="featurette-divider mx-auto" style={{width: "50%"}}/>
                <div className="row featurette bg-white text-black-20 text-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src={img}
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