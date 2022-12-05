import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const PrivateRoute = ({ Compenent, ...rest}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("username")){
            localStorage.removeItem("username")
            navigate("/login")
        }
    }, [navigate])
    
    return <Compenent/>

}

export default PrivateRoute