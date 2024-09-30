import { axiosInstance } from "../../config/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthAdmin = ({children}) => {
    const[isAdmin,setIsadmin]=useState(false)

    const navigate = useNavigate()

    const checkAdmin = async()=>{
        try {
            const response = await axiosInstance({
                method:"GET",
                url:"/admin/check-admin",
            });
            setIsadmin(true);
            console.log(response);
        } catch (error) {
            setIsadmin(false);
            console.log(error);
            navigate("/login")
        }
    }

    useEffect(()=>{
        checkAdmin()
    },[])

    return isAdmin ? children :null;
};