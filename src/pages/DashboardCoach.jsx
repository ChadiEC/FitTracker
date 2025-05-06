import React, {useEffect, useState} from 'react';
import {data, useNavigate} from "react-router-dom";
import axios from "axios";
import '../css/DashboardCoach.css'
import SideBar from "../navbar/SideBar.jsx";
/*
* Chadi El-Chami
* */
function DashboardCoach({connected,setConnected}) {

    const[coach,setCoach] = useState({})


    const navigate = useNavigate();

    if (!connected){

        return "connectez vous"
    }



    useEffect(() => {
        const password = localStorage.getItem("password")

        axios.get(`http://10.10.2.104:8789/clCoach/getCoach?password=${password}`)
            .then(res => {
                setCoach(res.data);
                console.log(res.data);
                setConnected(true);


            })
    },[]);







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
                                    {coach ? <h1>Welcome {coach.fname}</h1> : <h1>User Not Found</h1>}

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
}

export default DashboardCoach;