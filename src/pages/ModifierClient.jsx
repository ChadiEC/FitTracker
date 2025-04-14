import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ModifierClient() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [client, setClient] = useState({
        email: "",
        address: "",
        phoneNumber: "",
        postalCode: "",
        infoClientInfo: {
            password: "",
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

    // const onSubmit = async (e) => {
    //     try{
    //         e.preventDefault();
    //         await axios.put(`http://localhost:8787/cl/customer/${id}`, customer);
    //         navigate("/");
    //     }
    //     catch (error){
    //         console.error("Err: ", error);
    //     }
    // };
    //
    // const loadUser = async () => {
    //     try {
    //         const result = await axios.get(`http://localhost:8888/reda/customer/${id}`);
    //         setClient(result.data);
    //     }
    //     catch (error){
    //         console.error("Err: ", error);
    //     }
    //
    // };

    return (
        <div></div>
    );
}

export default ModifierClient;