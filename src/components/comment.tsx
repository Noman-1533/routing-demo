import { useEffect, useState } from "react";
import { Comment } from "../model/comments.model";
import { getComments } from "../API/api";

export default function CommentsList(){
    const [comments,setComments]=useState<Comment[]|null>(null)
    useEffect(()=>{
        const fetchComments=async ()=>{
            try{
            setComments(await getComments());
            }
            catch (error){
                console.log(error);
            }
        };
        fetchComments();
    },[]);

    if(!comments)return <h3>Loading...</h3>
    return (
        <>
        <div>
            <h1>Comments</h1>
            <ul>
            {
            comments.map((comment)=>{
                return (
                    <li key={comment.id}><a href={`comments/${comment.id}`}>{comment.name}</a></li>
                )
            })
        }
            </ul>
        
        </div>
        </>
    )
}