import React from 'react';

function Connexion() {
    return (

        <div>

            <div class="tab-content">
                <div
                    class="tab-pane fade show active"
                    id="pills-login"
                    role="tabpanel"
                    aria-labelledby="tab-login">
                    <form>
                        


                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="loginName">Adresse couriel</label>
                            <input type="email" id="loginName" class="form-control" />
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" class="form-control" />
                        </div>


                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">

                                <div class="form-check mb-3 mb-md-0">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="loginCheck"
                                        checked
                                    />
                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">

                                <a href="#!">Mot de passe oublier?</a>
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary btn-block mb-4">Connexion</button>


                        <div class="text-center">
                            <p>Pas encore membre? Inscrivez vous en tant que <a href="/Coach">coach </a> ou <a href="/Client">client</a></p>
                        </div>
                    </form>
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-register"
                    role="tabpanel"
                    aria-labelledby="tab-register"
                >
                    <form>
                        <div class="text-center mb-3">
                            <p>Sign up with:</p>
                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <p class="text-center">or:</p>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="text" id="registerName" class="form-control" />
                            <label class="form-label" for="registerName">Name</label>
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="text" id="registerUsername" class="form-control" />
                            <label class="form-label" for="registerUsername">Username</label>
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="email" id="registerEmail" class="form-control" />
                            <label class="form-label" for="registerEmail">Email</label>
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="password" id="registerPassword" class="form-control" />
                            <label class="form-label" for="registerPassword">Password</label>
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" class="form-control" />
                            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                        </div>


                        <div class="form-check d-flex justify-content-center mb-4">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="registerCheck"
                                checked
                                aria-describedby="registerCheckHelpText"
                            />
                            <label class="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>


                        <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Connexion;