import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Connexion.css";
/*
* Chadi El-Chami
* */
function Connexion({ setConnected }) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [isCoach, setIsCoach] = useState(false);
    const [isInvalidCredential, setIsInvalidCredential] = useState(false);
    const navigate = useNavigate();

    const setAttribute = (e) => {
        const value = e.target.value;
        setCredentials({ ...credentials, [e.target.name]: value });
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        let url = "http://10.10.2.104:8789/cl/login";
        if (isCoach) {
            url = "http://10.10.2.104:8789/clCoach/loginCoach";
        }

        try {
            const response = await axios.get(
                `${url}?username=${credentials.username}&password=${credentials.password}`
            );

            if (response.data) {
                setConnected(true);
                navigate(isCoach ? "/DashboardCoach" : "/DashboardClient");
            }
        } catch (err) {
            console.error("Login failed", err);
            setIsInvalidCredential(true);
        }
    };

    return (

        <>
            <style>
                {`
                .footer{display:none}`}
            </style>

        <div className="connexion-page">

            <div className="connexion-form-container">
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form onSubmit={submitLogin}>
                            <h1  className="LoginForm">Login</h1>
                            <div className="form-outline mb-4">
                                <input
                                    style={isInvalidCredential ? { border: "1px solid red" } : {}}
                                    name="username"
                                    type="text"
                                    id="loginName"
                                    className="form-control"
                                    onChange={setAttribute}
                                    value={credentials.username}
                                    placeholder="Username"

                                />
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    style={isInvalidCredential ? { border: "1px solid red" } : {}}
                                    name="password"
                                    type="password"
                                    id="loginPassword"
                                    className="form-control"
                                    onChange={setAttribute}
                                    value={credentials.password}
                                    placeholder="Password"
                                />
                            </div>

                            {isInvalidCredential && (
                                <p style={{ color: "red", textAlign: "start" }}>
                                    Invalid Username
                                </p>
                            )}

                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="loginCheck"
                                            checked={isCoach}
                                            onChange={(e) => setIsCoach(e.target.checked)}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="loginCheck"
                                        >
                                            Login as a coach
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Mot de passe oublié?</a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block mb-4"
                                id="loginButton"
                            >
                                Connexion
                            </button>

                            <div className="text-center">
                                <p style={{color:"black"}}>
                                    Pas encore membre? Inscrivez vous en tant que <a href="/Coach">coach </a> ou <a href="/Client">client</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Connexion;
