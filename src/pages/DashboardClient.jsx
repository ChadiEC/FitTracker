import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../css/DashboardClient.css';
import SideBar from "../navbar/SideBar.jsx";

/*
* Luderson Dominique
* */
function DashboardClient({ connected,setConnected }) {
    const [user, setUsers] = useState({});




    if (!connected) {
        return "Connectez-vous";
    }

    useEffect(() => {
        const password = localStorage.getItem("password");

        axios.get(`http://10.10.2.104:8789/cl/getClient?password=${password}`)
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
                <div className='dashboard-app'>
                    <SideBar setConnected={setConnected}/>

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
                </div>
            </div>


        </>
    )
        ;
}

export default DashboardClient;
