import React from 'react';
import '../css/page.css';
import  '../css/inscriptionPage.css'

import "bootstrap/dist/css/bootstrap.min.css";
import {Image} from "react-bootstrap";

function Client() {
    return (
        <section className="bg-light">
            <div className=""style={{width: "2000px", marginLeft: "0"}}>
                <div className="row justify-content-center">
                    <div className="col-12 col-xxl-12">
                        <div className=""
                             style={{borderRadius: "10px", maxWidth: "2900px", margin: "0",height: "100%"}}>
                            <div className="row g-0">
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
                                    <img
                                        className=""
                                        src=""
                                        alt="Welcome back you've been missed!"
                                        loading="lazy"
                                        style={{borderRadius: "5px",}}
                                    />
                                </div>
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="col-12 col-lg-11 col-xl-6">
                                        <div className="card-body p-4 p-md-5">
                                            <div className="text-center mb-4">

                                            </div>
                                            <h2 className="h4 text-center mb-4">Sign up For FitTracker</h2>
                                            <div className="d-flex gap-3 flex-column">
                                                <a href="#"
                                                   className="btn btn-dark btn-lg d-flex align-items-center justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         fill="currentColor" className="bi bi-google me-2"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                                    </svg>
                                                    Log in with Google
                                                </a>
                                            </div>
                                            <p className="text-center mt-4 mb-4">Or enter your details to register</p>
                                            <form>
                                                <div className="mb-3">
                                                    <input type="text"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="firstName" placeholder="First Name" required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="lastName" placeholder="Last Name" required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="email"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="email" placeholder="Email" required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="password" placeholder="Password" required/>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" name="iAgree"
                                                           required/>
                                                    <label className="form-check-label text-secondary">
                                                        I agree to the <a href="#"
                                                                          className="link-primary text-decoration-none">terms
                                                        and conditions</a>
                                                    </label>
                                                </div>
                                                <div className="d-grid">
                                                    <button className="btn btn-dark btn-lg" type="submit">Sign up
                                                    </button>
                                                </div>
                                            </form>
                                            <p className="mb-0 mt-5 text-secondary text-center">
                                                Already have an account? <a href="#"
                                                                            className="link-primary text-decoration-none">Sign
                                                in</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
        ;
}

export default Client;