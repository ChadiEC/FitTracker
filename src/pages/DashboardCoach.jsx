import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

function DashboardCoach({connected,setConnected}) {

    const[coach,setCoach] = useState({})


    const navigate = useNavigate();

    if (!connected){

        return "connectez vous"
    }



    useEffect(() => {


        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        axios.get(`http://localhost:8787/clCoach/getCoach?password=${password}`)
            .then(res => {




                setCoach(res.data);

            })
    },[]);




    const Logout = (e) =>{
        setConnected(false)
        navigate("/Connexion")
    }


    return (
        <>

            <div>
                {coach? <h1>Welcome {coach.fname}</h1>: <h1>User Not Found</h1>}
            </div>
            <div>
                <Button onClick={Logout}>Logout</Button>
            </div>
        </>
    );

}

export default DashboardCoach;