import axios from 'axios';
import { User } from '../model/user.model';
import { Comment } from '../model/comments.model';
const BASE_URL="https://jsonplaceholder.typicode.com";
const apiClient=axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
    },
});

export const getUsers=async()=>{
const {data}=await apiClient.get<User[]>('users');
return data;

}
export const getUserById=async (userId:string)=>{
    const {data}=await apiClient.get<User>(`users/${userId}`);
    return data;
}
export const getComments=async ()=>{
    const {data}=await apiClient.get<Comment[]>('comments');
    return data;
}
export const getCommentsById=async (commentId:string)=>{
    const {data}=await apiClient.get<Comment>(`comments/${commentId}`);
    return data;
}