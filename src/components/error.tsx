import { useRouteError } from "react-router-dom"
export default function ErrorPage(){
    const error=useRouteError() as {statusText?:string,message?:string}
    return (
       <>
       <div>
        <h1>OPS!</h1>
        <p>An unexpected error occur</p>
        <p>{error.statusText|| error.message}</p>

       </div>
       </> 
    )
}