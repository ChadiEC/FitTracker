import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Client.css";
/*
* Luderson Dominique
* */
function Client({ setConnected }) {

    const [client, setClient] = useState({
        fname: "",
        lname: "",
        email: "",
        address: "",
        phoneNumber: "",
        postalCode: "",
        infoClientInfo: {
            username: "",
            password: "",
            age: "",
            weight: "",
            height: ""
        },
    });

    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const setAttribute = (e) => {
        const { name, value } = e.target;
        setClient((prev) => {
            if (["username", "password","age","weight","height"].includes(name)) {
                return {
                    ...prev,
                    infoClientInfo: { ...prev.infoClientInfo, [name]: value },
                };
            } else {
                return { ...prev, [name]: value };
            }
        });
    };





    const handleFirstSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", client.infoClientInfo.username);
        localStorage.setItem("password", client.infoClientInfo.password);
        setStep(2);
    };

    const handleSecondSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("age", client.infoClientInfo.age);
        localStorage.setItem("weight", client.infoClientInfo.weight);
        localStorage.setItem("height", client.infoClientInfo.height);
        setStep(3)
    };

    const submitNewClient = (e) => {
        e.preventDefault();
        axios
            .post("http://10.10.2.104:8789/cl/createClient", client)
            .then(() => {
                setConnected(true);
                navigate("/DashboardClient");
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

            <div className="client-page">

                <div className="client-form-container">

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-client" role="tabpanel">

                            {step === 1 ? (
                                <form onSubmit={handleFirstSubmit}>
                                    <h1 className="LoginForm">Créer un compte client</h1>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nom d'utilisateur"
                                            value={client.infoClientInfo.username}
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
                                            value={client.infoClientInfo.password}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Suivant
                                    </button>
                                </form>
                            ) : (step === 2 ? (
                                <form onSubmit={handleSecondSubmit}>
                                    <h1 className="LoginForm">Entrez vos information corporelles</h1>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="age"
                                            type="text"
                                            className="form-control"
                                            placeholder="age"
                                            value={client.infoClientInfo.age}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="weight"
                                            type="text"
                                            className="form-control"
                                            placeholder="weight"
                                            value={client.infoClientInfo.weight}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="height"
                                            type="text"
                                            className="form-control"
                                            placeholder="height"
                                            value={client.infoClientInfo.height}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Suivant
                                    </button>
                                </form>
                            ) : (
                                <form onSubmit={submitNewClient}>
                                    <h1 className="LoginForm">Informations personnelles</h1>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="lname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nom"
                                            value={client.lname}
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
                                            value={client.fname}
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
                                            value={client.email}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="address"
                                            type="text"
                                            className="form-control"
                                            placeholder="Adresse"
                                            value={client.address}
                                            onChange={setAttribute}
                                        />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            name="phoneNumber"
                                            type="text"
                                            className="form-control"
                                            placeholder="Numéro de téléphone"
                                            value={client.phoneNumber}
                                            onChange={setAttribute}
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            name="postalCode"
                                            type="text"
                                            className="form-control"
                                            placeholder="Code postal"
                                            value={client.postalCode}
                                            onChange={setAttribute}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block mb-4">
                                        S'inscrire
                                    </button>
                                </form>



                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
</>
)
    ;
}

export default Client;
