import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../model/user.model";
import { getUserById } from "../API/api";

export default function UserDetails(){
    const {id}=useParams<{id:string}>();
    const [user,setUser]=useState<User|null>(null);

    useEffect(()=>{

        const fetchUser=async ()=>{
            try{
                if(id){
                    setUser(await getUserById(id));
                }
            }
            catch (error){
                console.log(error);
            }
        }
        fetchUser();
    },[id]);
    if(!user)return <p>Loading...</p>

    return (
        <>
        <div>
            <h1>Hello {user?.name}</h1>
            <p><b>username:{user?.username}</b></p>
        </div>
        </>
    )
}