import React, {useEffect, useState} from 'react';
import axios from "axios";
import tab from "bootstrap/js/src/tab.js";
import {data} from "react-router-dom";


function DashboardClient() {

    const[user,setUsers] = useState({})



    useEffect(() => {


        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        axios.get(`http://localhost:8787/cl/login?username=${username}&password=${password}`)
            .then(res => {


                setUsers(res.data);

            })
    },[]);



    return (
        <div>
            {user? <h1>Welcome {user.fname}</h1>: <h1>User Not Found</h1>}
        </div>
    );

}

export default DashboardClient;