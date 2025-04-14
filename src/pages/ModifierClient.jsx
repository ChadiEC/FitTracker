import axios from "axios";
import  { useEffect, useState } from "react";
import {data, Link, useNavigate, useParams} from "react-router-dom";


function ModifierClient({ setConnected }) {

    const navigate = useNavigate();


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
            height: "",
            weight: "",
        },
    });

    const setAttribute = (e) => {
        const { name, value } = e.target;
        setClient((prev) => {
            if (["password"].includes(name)) {
                return {
                    ...prev,
                    infoClientInfo: { ...prev.infoClientInfo, [name]: value },
                };
            } else {
                return { ...prev, [name]: value };
            }
        });
    };

    useEffect(() => {
        loadUser();
    }, []);


    const onSubmit = async (e) => {
        const password = localStorage.getItem("password");
        try{
            e.preventDefault();
            await axios.put(`http://localhost:8787/cl/clientput?password=${password}`, client);

            navigate("/");
        }
        catch (error){
            console.error("Err: ", error);
        }
    };






     const loadUser = async () => {
         const password = localStorage.getItem("password");

         axios.get(`http://localhost:8787/cl/getClient?password=${password}`)
             .then(res => {
                 setClient(res.data);
                 console.log(res.data);
                 setConnected(true);

             });
     }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="email"
                                name="email"
                                value={client.email}
                                onChange={setAttribute}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="address"
                                name="address"
                                value={client.address}
                                required
                                onChange={setAttribute}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                                phoneNumber
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="phoneNumber"
                                name="phoneNumber"
                                value={client.phoneNumber}
                                onChange={setAttribute}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="postalCode" className="form-label">
                                postalCode
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="postalCode"
                                name="postalCode"
                                value={client.postalCode}
                                onChange={setAttribute}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                password
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="password"
                                name="password"
                                value={client.infoClientInfo.password}
                                onChange={setAttribute}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModifierClient;