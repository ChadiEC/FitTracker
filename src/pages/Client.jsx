import 'react';
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Client({setConnected}) {

    const [client, setClient] = useState({
        fname:"",
        lname:"",
        email:"",
        address:"",
        phoneNumber:"",
        postalCode:"",
        infoClientInfo: {
            username: "",
            password: ""
        }
    });

    const [step, setStep] = useState(1);

    const setAttribute = (e) => {
        const { name, value } = e.target;

        setClient((prev) => {
            // Check if the field belongs to infoClientInfo
            if (["username", "password"].includes(name)) {
                return {...prev, infoClientInfo: {...prev.infoClientInfo, [name]: value}};
            } else {
                return {...prev, [name]: value};
            }
        });
    };

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", client.infoClientInfo.username);
        localStorage.setItem("password", client.infoClientInfo.password);
        setStep(2); // Passe au formulaire suivant
    };

    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8787/cl/createClient",client)
            .then(() =>{


                    console.log("Saved username",localStorage.getItem("username",client.infoClientInfo.username))
                    console.log("Saved password",localStorage.getItem("password",client.infoClientInfo.password))


              setConnected(true)

                navigate("/DashboardClient")
            }).catch((error) => {
            console.log(error)
        })
    }

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <div className="row justify-content-lg-start">

                <div className="col-md-6"><h2 className="mb-4">User Information</h2>
                    {step === 1 ? (
                        <form className="form-detail" onSubmit={handleFirstSubmit}>


                            <div className="mb-3"><label htmlFor="username" className="form-label text-start d-block">Username</label> <input type="text" className="form-control" name="username" id="username"
                                                                                                                                              placeholder="Entrer votre username"
                                                                                                                                              onChange={(e) => setAttribute(e)}
                                                                                                                                              value={client.infoClientInfo.username}/>
                            </div>
                            <div className="mb-3"><label htmlFor="password" className="form-label text-start d-block">Password</label> <input type="text" className="form-control" name="password" id="password"
                                                                                                                                              placeholder="Créer votre mdp"
                                                                                                                                              onChange={(e) => setAttribute(e)}
                                                                                                                                              value={client.infoClientInfo.password}/>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                        ): (
                            <form className="form-detail" onSubmit={(e) => submitNewClient(e)} method="post">

                                <div className="mb-3 "><label htmlFor="lastname" className="form-label text-start d-block">Last
                                    Name</label> <input type="text" className="form-control" name="lname" id="lastname"
                                                        placeholder="Entrer votre nom"
                                                        onChange={(e) => setAttribute(e)}
                                                        value={client.lname}/>
                                </div>

                                <div className="mb-3"><label htmlFor="firstname" className="form-label text-start d-block">First
                                    Name</label> <input type="text" className="form-control" name="fname" id="firstname"
                                                        placeholder="Entrer votre prénom"
                                                        onChange={(e) => setAttribute(e)}
                                                        value={client.fname}/>
                                </div>

                                <div className="mb-3"><label htmlFor="email"
                                                             className="form-label text-start d-block">Email</label> <input
                                    type="email" className="form-control" name="email" id="email"
                                    placeholder="Entrer votre email"
                                    required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribute(e)}
                                    value={client.email}/>
                                </div>

                                <div className="mb-3"><label htmlFor="address" className="form-label text-start d-block">
                                    Adresse
                                </label> <input type="text" className="form-control" name="address" id="address"
                                                placeholder="Entrez votre adresse"
                                                onChange={(e) => setAttribute(e)}
                                                value={client.address}/>
                                </div>

                                <div className="mb-3"><label htmlFor="phoneNumber"
                                                             className="form-label text-start d-block">
                                    Numéro de téléphone
                                </label> <input type="text" className="form-control" name="phoneNumber" id="phoneNumber"
                                                placeholder="Entrez votre numéro de téléphone"
                                    //required pattern= "\(\d{3}\)\s*\d{3}-\d{4}"
                                                onChange={(e) => setAttribute(e)}
                                                value={client.phoneNumber}/>
                                </div>

                                <div className="mb-3"><label htmlFor="codePostale"
                                                             className="form-label text-start d-block">Code
                                    postale
                                </label> <input type="text" className="form-control" name="postalCode" id="postalCode"
                                                placeholder="Entrez votre code postale"
                                                required
                                                onChange={(e) => setAttribute(e)}
                                                value={client.postalCode}/>
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>

                            </form>

                        )}

                        < /div>
                        </div>
                        </div>




                    );
                    /*
                    return(
                    < div>
                        < form>
                            <h3>Incription en tant que client</h3><br/>
                            <div class="row mb-4">
                                <div class="col">
                                    <div data-mdb-input-init class="form-outline">
                                        <label class="form-label" for="form6Example1">Nom</label>
                                        <input type="text" id="form6Example1" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div data-mdb-input-init class="form-outline">
                                        <label class="form-label" for="form6Example2">Prénom</label>
                                        <input type="text" id="form6Example2" class="form-control"/>
                                    </div>
                                </div>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form6Example3">Adresse couriel</label>
                                <input type="text" id="form6Example3" class="form-control"/>

                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form6Example4">Adresse </label>
                                <input type="text" id="form6Example4" class="form-control"/>

                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form6Example5">Code postal</label>
                                <input type="email" id="form6Example5" class="form-control"/>

                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form6Example6">Phone</label>
                                <input type="number" id="form6Example6" class="form-control"/>

                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form6Example7">Information additionnel</label>
                                <textarea class="form-control" id="form6Example7" rows="4"></textarea>

                            </div>


                            <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Envoyer
                            </button>
                        </form>
                    </div>
                    );*/
                    }

                    export default Client;
