import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../css/DashboardClient.css';

function DashboardClient({ connected, setConnected }) {
    const [user, setUsers] = useState({});
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const navigate = useNavigate();

    if (!connected) {
        return "Connectez-vous";
    }

    useEffect(() => {
        const password = localStorage.getItem("password");

        axios.get(`http://localhost:8787/cl/getClient?password=${password}`)
            .then(res => {
                setUsers(res.data);
            });
    }, []);

    const Logout = () => {
        setConnected(false);
        navigate("/Connexion");
    };

    return (
        <>
            <style>{`
                .navbar { display: none; }
                .footer {display: none;}
            `}</style>
            <div className={`dashboard ${isNavbarOpen ? "nav-open" : ""}`}>
                {/* Toggle Navbar Button */}
                <button className="menu-toggle" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <i className="fas fa-bars"></i>
                </button>

                {/* Sidebar Navbar */}
                <div className={`dashboard-nav ${isNavbarOpen ? "open" : "closed"}`}>
                    <header>
                        <a href="#!" className="brand-logo">
                            <i className=""></i> <span>FitTracker</span>
                        </a>
                    </header>
                    <nav className="dashboard-nav-list">
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i> <span>Home</span> </a>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-user"></i> <span>Profile</span>
                        </a>
                        <a href="#" className="dashboard-nav-item"><i className="fa-solid fa-dumbbell"></i>
                            <span>Workout</span> </a>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-apple-alt"></i>
                            <span>MealPlan</span> </a>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-cogs"></i> <span>Settings</span>
                        </a>

                        <div className="nav-item-divider"></div>
                        <div className="nav-item-divider"></div>
                        <a href="#" onClick={Logout} className="dashboard-nav-item"><i
                            className="fas fa-sign-out-alt"></i> <span className="label">Logout</span> </a>
                    </nav>
                </div>

                {/* Main Content */}
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
