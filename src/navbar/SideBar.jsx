import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SideBar({setConnected}) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const navigate = useNavigate();

    const Logout = () => {
        setConnected(false);
        navigate("/Connexion");
    };
    return (
        <div className={`dashboard ${isNavbarOpen ? "nav-open" : ""}`}>

            <button className="menu-toggle" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                <i className="fas fa-bars"></i>
            </button>


            <div className={`dashboard-nav ${isNavbarOpen ? "open" : "closed"}`}>
                <header>
                    <a href="#!" className="brand-logo">
                        <i className=""></i> <span>FitTracker</span>
                    </a>
                </header>
                <nav className="dashboard-nav-list">
                    <a href="/DashboardClient" className="dashboard-nav-item"><i className="fas fa-home"></i> <span>Home</span> </a>
                    <a href="/Profile" className="dashboard-nav-item"><i className="fas fa-user"></i>
                        <span>Profile</span>
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
        </div>
            );
            }

            export default SideBar;