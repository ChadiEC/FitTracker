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
            `}</style>
            <div className={`dashboard ${isNavbarOpen ? "nav-open" : ""}`}>
                {/* Toggle Navbar Button */}
                <button className="menu-toggle" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <i className="fas fa-bars"></i>
                </button>

                {/* Sidebar Navbar */}
                <div className={`dashboard-nav ${isNavbarOpen ? "open" : ""}`}>
                    <header>
                        <a href="#!" className="brand-logo">
                            <i className=""></i> <span>FitTracker</span>
                        </a>
                    </header>
                    <nav className="dashboard-nav-list">
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i> Home </a>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </a>
                        <a href="#" className="dashboard-nav-item"><i className="fa-solid fa-dumbbell"></i> Workout </a>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-apple-alt"></i> MealPLan </a>
                        <a href="#"  className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </a>

                        <div className="nav-item-divider"></div>
                        <div className="nav-item-divider"></div>
                        <a href="#" onClick={Logout} className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
                    </nav>
                </div>

                {/* Main Content */}
                <div className='dashboard-app'>
                <div className='dashboard-content'>
                        <div className='container'>
                            <div className='card'>
                                <div className='card-header'>
                                    {user ? <h1>Welcome {user.fname}</h1> : <h1>User Not Found</h1>}
                                </div>
                                <div className='card-body'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardClient;
