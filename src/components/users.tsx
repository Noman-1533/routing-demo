import { useEffect, useState } from "react";
import { getUsers } from "../API/api";
import { User } from "../model/user.model";
import "./header.css"
// import { Link } from "react-router-dom";

export default function Users(){
    const [users,setUsers]=useState<User[]|null>(null);
    useEffect(()=>{
         const fetchUser=async()=>{
            try{
            setUsers(await getUsers())
            }
            catch (err){
                console.log(err);
            }
         }
         fetchUser();
    },[]);
    if(!users)return <p>Loading...</p>
    return (
        <>
            <div>
                <h3>List of Users</h3>
                <ul>
                    {
                        users.map((user)=>{
                            return (<li key={user.id} style={{
                                margin:"15px",
                                listStyle:"none"
                            }}><a href={`users/${user.id}`} className="navLink nav-bg" >{user.username}</a></li>)
                        })
                    }
                </ul>
            </div>

        </>
    )
}