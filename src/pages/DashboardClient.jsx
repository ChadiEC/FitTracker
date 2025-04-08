import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/DashboardClient.css';
import SideBar from "../navbar/SideBar.jsx";

// eslint-disable-next-line react/prop-types
function DashboardClient({ connected,setConnected }) {
    const [user, setUsers] = useState({});




    if (!connected) {
        return "Connectez-vous";
    }

    useEffect(() => {
        const password = localStorage.getItem("password");

        axios.get(`http://localhost:8787/cl/getClient?password=${password}`)
            .then(res => {
                setUsers(res.data);
                setConnected(true);

            });
    }, []);



    return (
        <>
            <style>{`
                 #root {
                         max-width: 1280px;
                         margin: 0 auto;
                         padding: 2rem;
                         text-align: center;
                        }
                .navbar { display: none; }
                .footer {display: none;}
            `}</style>
            <div className="Container-Home">
                <SideBar setConnected={setConnected}/>

                <div className='dashboard-app'>

                    <div className="top">
                        <section className="userInfo">
                            <div className="userInfo_TopBar">
                                <div className="topBar texte">
                                    {user ? <h1>Welcome {user.fname}</h1> : <h1>User Not Found</h1>}

                                </div>
                            </div>
                        </section>

                        <section className="cardTop">
                            <article className="cards_card">
                                <div className="card_text">

                                </div>

                                <div className="card_icon">

                                </div>
                            </article>
                            <article className="cards_card">
                                <div className="card_text">


                                </div>
                                <div className="card_icon">

                                </div>
                            </article>
                            <article className="cards_card">
                                <div className="card_text">


                                </div>
                                <div className="card_icon">

                                </div>
                            </article>
                        </section>
                        <section className="graphisme">
                            <article className="left"></article>
                            <article className="right"></article>
                        </section>

                        <section className="progress">
                            <article className=""></article>
                        </section>


                    </div>
                    <div className="bottom"></div>
                </div>
            </div>


        </>
    )
        ;
}

export default DashboardClient;
