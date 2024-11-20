import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../API/api";
import { Comment } from "../model/comments.model";

export default function CommentDetails(){
    const {id}=useParams<{id:string}>();
    const [comment,setComment]=useState<Comment|null>(null);
    useEffect(()=>{
        const fetchComment=async ()=>{
            try{
                if(id)
                setComment(await getCommentsById(id))
            }
            catch (error){
                console.log(error);
            }
        }
        fetchComment();
    },[id]);
    if(!comment)return <h3>Loading...</h3>
    return (
        <>
        <div>
            <h1>{comment.name}</h1>
            <div>
                <p>email:{comment.email}</p>
                <p>
                    {comment.body}
                </p>
            </div>
        </div>
        </>
    )
}