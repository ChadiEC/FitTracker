import React, {useEffect, useState} from 'react';
import axios from "axios";


function DashboardClient() {

    const[tabUsers,setTabUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setTabUsers(res.data))
            .catch(err => console.log)
    },[]);


    return (
        <div>


                {
                    tabUsers.map((data, i) => (
                        <tr key={i}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.address.city}</td>
                            <td>{data.address.geo.lng}</td>
                        </tr>
                    ))


                }




        </div>
    );
}

export default DashboardClient;