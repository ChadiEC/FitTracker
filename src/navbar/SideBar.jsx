import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

function SideBar({setConnected}) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const navigate = useNavigate();


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
                    <Link to='/DashboardClient'><a className="dashboard-nav-item"><i className="fas fa-home"></i>
                        <span>Home</span> </a></Link>
                    <Link to='/DashboardClient/Profile'><a className="dashboard-nav-item"><i
                        className="fas fa-user"></i>
                        <span>Profile</span>
                    </a></Link>
                    <Link to='/DashboardClient/Workout'><a className="dashboard-nav-item"><i
                        className="fa-solid fa-dumbbell"></i>
                        <span>Workout</span> </a></Link>
                    <Link to='/DashboardClient/MealPlan'><a className="dashboard-nav-item"><i
                        className="fas fa-apple-alt"></i>
                        <span>MealPlan</span> </a></Link>
                    <Link to='/DashboardClient/Settings'><a className="dashboard-nav-item"><i className="fas fa-cogs"></i>
                        <span>Settings</span>
                    </a></Link>

                    <div className="nav-item-divider"></div>
                    <div className="nav-item-divider"></div>

                    <Link to='/Connexion'><a onClick={() => setConnected(false)} className="dashboard-nav-item"><i
                        className="fas fa-sign-out-alt"></i> <span className="label">Logout</span> </a></Link>
                </nav>
            </div>
        </div>
    );
}

export default SideBar;