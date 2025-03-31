import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Coach({setConnected}) {

    const [coach, setCoach] = useState({
        fname: "",
        lname: "",
        email: "",
        nbrClient:"",
        anneeExp:"",
        infoCoachInfo: {
            username: "",
            password: ""
        }
    });
    const setAttribute = (e) => {
        const { name, value } = e.target;

        setCoach((prev) => {
            if (["username", "password"].includes(name)) {
                return {...prev, infoCoachInfo: {...prev.infoCoachInfo, [name]: value}};
            } else {
                return {...prev, [name]: value};
            }
        });
    };

    const [step, setStep] = useState(1);

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", coach.infoCoachInfo.username);
        localStorage.setItem("password", coach.infoCoachInfo.password);
        setStep(2); // Passe au formulaire suivant
    };

    const submitNewCoach = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8787/clCoach/createCoach", coach)
            .then(() => {


                console.log("Saved username", localStorage.getItem("username", coach.infoCoachInfo.username))
                console.log("Saved password", localStorage.getItem("password", coach.infoCoachInfo.password))


                setConnected(true)

                navigate("/DashboardCoach")
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


                            <div className="mb-3"><label htmlFor="username" className="form-label text-start d-block">Username</label>
                                <input type="text" className="form-control"
                                       name="username" id="username"
                                       placeholder="Entrer votre username"
                                       onChange={(e) => setAttribute(e)}
                                       value={coach.infoCoachInfo.username}/>
                            </div>
                            <div className="mb-3"><label htmlFor="password" className="form-label text-start d-block">Password</label>
                                <input type="text" className="form-control"
                                       name="password" id="password" placeholder="Créer votre mdp"
                                       onChange={(e) => setAttribute(e)}
                                       value={coach.infoCoachInfo.password}/>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    ): (
                        <form className="form-detail" onSubmit={(e) => submitNewCoach(e)} method="post">

                            <div className="mb-3 "><label htmlFor="lastname" className="form-label text-start d-block">Last
                                Name</label> <input type="text" className="form-control" name="lname" id="lastname"
                                                    placeholder="Entrer votre nom"
                                                    onChange={(e) => setAttribute(e)}
                                                    value={coach.lname}/>
                            </div>

                            <div className="mb-3"><label htmlFor="firstname" className="form-label text-start d-block">First
                                Name</label> <input type="text" className="form-control" name="fname" id="firstname"
                                                    placeholder="Entrer votre prénom"
                                                    onChange={(e) => setAttribute(e)}
                                                    value={coach.fname}/>
                            </div>

                            <div className="mb-3"><label htmlFor="email"
                                                         className="form-label text-start d-block">Email</label> <input
                                type="email" className="form-control" name="email" id="email"
                                placeholder="Entrer votre email"
                                required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribute(e)}
                                value={coach.email}/>
                            </div>

                            <div className="mb-3"><label htmlFor="nbrClient" className="form-label text-start d-block">
                                nbrClient
                            </label> <input type="text" className="form-control" name="nbrClient" id="nbrClient"
                                            placeholder="Entrez votre nbrClient"
                                            onChange={(e) => setAttribute(e)}
                                            value={coach.nbrClient}/>
                            </div>

                            <div className="mb-3"><label htmlFor="anneeExp"
                                                         className="form-label text-start d-block">
                                anneeExp
                            </label> <input type="text" className="form-control" name="anneeExp" id="anneeExp"
                                            placeholder="Entrez votre anneeExp"
                                //required pattern= "\(\d{3}\)\s*\d{3}-\d{4}"
                                            onChange={(e) => setAttribute(e)}
                                            value={coach.anneeExp}/>
                            </div>



                                <button type="submit" className="btn btn-primary">Submit</button>


                        </form>

                        )}

                < /div>
            </div>
        </div>
)

}

export default Coach;