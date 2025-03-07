import React, {useEffect, useState} from 'react';
import axios from "axios";
import tab from "bootstrap/js/src/tab.js";
import {data} from "react-router-dom";


function DashboardClient() {

    const[tabUsers,setTabUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setTabUsers(res.data))
            .catch(err => console.log)
    },[]);

    const firstUser = tabUsers.length > 0 ? tabUsers[0] : null;

    return (
        <div>
            {/* Afficher l'objet du premier utilisateur */}
            {firstUser ? (
                <div>
                    <h2>{firstUser.name}</h2>
                    <p>Email: {firstUser.email}</p>
                    <p>Username: {firstUser.username}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );

}

export default DashboardClient;