import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(){
    const info_login = localStorage.getItem('token')
    if(!info_login){
        return <Navigate to='/login' replace/>
    }
    return <Outlet/>
}