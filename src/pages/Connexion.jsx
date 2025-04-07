import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Connexion({ setConnected }) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [isCoach, setIsCoach] = useState(false);
    const [isInvalidCredential, setIsInvalidCredential] = useState(false);

    const setAttribute = (e) => {
        const value = e.target.value;
        setCredentials({ ...credentials, [e.target.name]: value });
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        let url = "http://localhost:8787/cl/login";

        if (isCoach) {
            url = "http://localhost:8787/clCoach/loginCoach";
        }

        try {
            const response = await axios.get(
                `${url}?username=${credentials.username}&password=${credentials.password}`
            );

            if (response.data) {
                setConnected(true);

                if (isCoach) {
                    navigate("/DashboardCoach");
                } else {
                    navigate("/DashboardClient");
                }
            }
        } catch (err) {
            console.error("Login failed", err);

            setIsInvalidCredential(true)

        }
    };

    const navigate = useNavigate();

    return (
        <div>
            <div class="tab-content">
                <div
                    class="tab-pane fade show active"
                    id="pills-login"
                    role="tabpanel"
                    aria-labelledby="tab-login"
                >
                    <form>
                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="loginName">
                                Username
                            </label>
                            <input
                                style={isInvalidCredential ? {border:"1px solid red"} : {border:"default"}}
                                name="username"
                                type="username"
                                id="loginName"
                                class="form-control"
                                onChange={setAttribute}
                                value={credentials.username}
                            />
                        </div>


                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="loginPassword">
                                Password
                            </label>
                            <input
                                style={isInvalidCredential ? {border:"1px solid red"} : {border:"default"}}
                                name="password"
                                type="password"
                                id="loginPassword"
                                class="form-control"
                                onChange={setAttribute}
                                value={credentials.password}
                            />
                        </div>
                        {isInvalidCredential && <p style={{color:"red", textAlign:"start"}}> Invalid Username</p>}
                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">
                                <div class="form-check mb-3 mb-md-0">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="loginCheck"
                                        checked={isCoach}
                                        onChange={(e) => setIsCoach(e.target.checked)}
                                    />
                                    <label class="form-check-label" for="loginCheck">
                                        Login as a coach
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">
                                <a href="#!">Mot de passe oublier?</a>
                            </div>
                        </div>

                        <button
                            onClick={submitLogin}
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                        >
                            Connexion
                        </button>

                        <div class="text-center">
                            <p>
                                Pas encore membre? Inscrivez vous en tant que{" "}
                                <a href="/Coach">coach </a> ou <a href="/Client">client</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Connexion;


