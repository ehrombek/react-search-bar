import React, { useEffect, useState } from 'react';
import './app.css';
import Table from './Table';
import { Users } from './Users';
import axios from 'axios'

const Srch = () => {
    const[query, setQuery] =useState("")
    const keys =["first_name", "last_name",  "email", ]
    const [data, setData] = useState([])

    console.log(Users[0] ["first_name"]);
    const search =(data) =>{
        // return data.filter((item) => item.first_name.toLowerCase().includes(query) ||
        // item.last_name.toLowerCase().includes(query) ||
        // item.email.toLowerCase().includes(query))

        return data.filter(
            (item) =>
                keys.some(key => item[key].toLowerCase().includes(query))
        )
    };

    useEffect(() =>{
        const fetchUsers = async()=>{
            const res = await axios.get("http:localhost:5000")
            setData(res.data)
        }
        fetchUsers()
    },[])
    // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));
    return (
        <div  className='main'>
            <input type="text" placeholder='Search... '  className='search' onChange={(e) => setQuery(e.target.value)}/>
            <Table data={search(Users)}/>
        </div>
    );
};

export default Srch;