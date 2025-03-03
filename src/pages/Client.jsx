import 'react';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Client() {
    const [client, setClient] = useState({
        fname:"",
        lname:"",
        email:""
    });

    const setAttribute = (e) => {
        const value = e.target.value;
        setClient({...client,[e.target.name]:value})
    }

    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8888/cl/createClient",client)
            .then(() =>{

                navigate("/list")
            }).catch((error) => {
            console.log(error)
        })
    }

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-lg-start">
                <div className="col-md-6"><h2 className="mb-4">User Information</h2>
                    <form className="form-detail" onSubmit={(e) => submitNewClient(e)} method="post">
                        <div className="mb-3 "><label htmlFor="lastname" className="form-label text-start d-block">Last
                            Name</label> <input type="text" className="form-control" name="lname" id="lastname"
                                                placeholder="Enter your last name" required
                                                onChange={(e) => setAttribute(e)}
                                                value={client.lname}/></div>
                        <div className="mb-3"><label htmlFor="firstname" className="form-label text-start d-block">First
                            Name</label> <input type="text" className="form-control" name="fname" id="firstname"
                                                placeholder="Enter your first name" required
                                                onChange={(e) => setAttribute(e)}
                                                value={client.fname}/></div>
                        <div className="mb-3"><label htmlFor="email"
                                                     className="form-label text-start d-block">Email</label> <input
                            type="email" className="form-control" name="email" id="email" placeholder="Enter your email"
                            required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribute(e)}
                            value={client.email}/></div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
       /*
       return(
       < div >
        < form >
            <h3>Incription en tant que client</h3><br/>
            <div class="row mb-4">
                <div class="col">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form6Example1">Nom</label>
                        <input type="text" id="form6Example1" class="form-control" />
                    </div>
                </div>
                <div class="col">
                    <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="form6Example2">Prénom</label>
                        <input type="text" id="form6Example2" class="form-control" />
                    </div>
                </div>
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example3">Adresse couriel</label>
                <input type="text" id="form6Example3" class="form-control" />

            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example4">Adresse </label>
                <input type="text" id="form6Example4" class="form-control" />
                
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example5">Code postal</label>
                <input type="email" id="form6Example5" class="form-control" />
                
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form6Example6">Phone</label>
                <input type="number" id="form6Example6" class="form-control" />
                
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form6Example7">Information additionnel</label>
                <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                
            </div>


            <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Envoyer</button>
        </form >
    </div >
    );*/
}

export default Client;