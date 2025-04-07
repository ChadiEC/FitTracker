import React from 'react';
import SideBar from "../navbar/SideBar.jsx";

function Profile() {
    return (
        <>
            <style>{`
                .navbar { display: none; }
                .footer {display: none;}
            `}</style>
            <div className="Container">
                <SideBar/>
                <div className="Profile-Card">

                </div>
            </div>
        </>
    );
}

export default Profile;