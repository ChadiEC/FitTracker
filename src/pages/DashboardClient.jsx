import React, {useEffect, useState} from 'react';
import axios from "axios";
import tab from "bootstrap/js/src/tab.js";
import {data, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";


function DashboardClient({connected,setConnected}) {

    const[user,setUsers] = useState({})


    const navigate = useNavigate();

    if (!connected){

        return null
    }



    useEffect(() => {


        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        axios.get(`http://localhost:8787/cl/login?username=${username}&password=${password}`)
            .then(res => {




                setUsers(res.data);

            })
    },[]);




    const Logout = (e) =>{
            setConnected(false)
            navigate("/Connexion")
    }


    return (
        <>

        <div>
            {user? <h1>Welcome {user.fname}</h1>: <h1>User Not Found</h1>}
        </div>
            <div>
                <Button onClick={Logout}>Logout</Button>
            </div>
        </>
    );

}

export default DashboardClient;