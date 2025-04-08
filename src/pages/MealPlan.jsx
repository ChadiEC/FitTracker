import React from 'react';
import SideBar from "../navbar/SideBar.jsx";

function MealPlan({connected, setConnected}) {
    if (!connected) {
        return "Connectez-vous";
    }
    return (
        <>
            <style>{`
                .navbar { display: none; }
                .footer {display: none;}
            `}</style>
            <div className="Container">
                <SideBar setConnected={setConnected}/>
                <div className="Profile-Card">

                </div>
            </div>
        </>
    );
}

export default MealPlan;