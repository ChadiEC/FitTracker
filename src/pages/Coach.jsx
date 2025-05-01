import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Coach.css";
/*
* Chadi El-Chami
* */
function Coach({ setConnected }) {
    const [coach, setCoach] = useState({
        fname: "",
        lname: "",
        email: "",
        nbrClient: "",
        anneeExp: "",
        infoCoachInfo: {
            username: "",
            password: "",
        },
    });

    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const setAttribute = (e) => {
        const { name, value } = e.target;
        setCoach((prev) => {
            if (["username", "password"].includes(name)) {
                return {
                    ...prev,
                    infoCoachInfo: { ...prev.infoCoachInfo, [name]: value },
                };
            } else {
                return { ...prev, [name]: value };
            }
        });
    };

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", coach.infoCoachInfo.username);
        localStorage.setItem("password", coach.infoCoachInfo.password);
        setStep(2);
    };

    const submitNewCoach = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8787/clCoach/createCoach", coach)
            .then(() => {
                setConnected(true);
                navigate("/DashboardCoach");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <style>
                {`.footer{display:none}`}
            </style>

            <div className="coach-page">
                <div className="coach-form-container">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-coach" role="tabpanel">
                            {step === 1 ? (
                                <form onSubmit={handleFirstSubmit}>
                                    <h1 className="LoginForm">Créer un compte coach</h1>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nom d'utilisateur"
                                            value={coach.infoCoachInfo.username}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Mot de passe"
                                            value={coach.infoCoachInfo.password}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Suivant
                                    </button>
                                </form>
                            ) : (
                                <form onSubmit={submitNewCoach}>
                                    <h1 className="LoginForm">Informations personnelles</h1>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="lname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nom"
                                            value={coach.lname}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="fname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Prénom"
                                            value={coach.fname}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={coach.email}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="nbrClient"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre de clients"
                                            value={coach.nbrClient}
                                            onChange={setAttribute}
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="anneeExp"
                                            type="text"
                                            className="form-control"
                                            placeholder="Années d'expérience"
                                            value={coach.anneeExp}
                                            onChange={setAttribute}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block mb-4">
                                        S'inscrire
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coach;
