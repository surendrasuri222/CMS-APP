import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Unauth() {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [])


    return (
        <div>U are not accessed</div>
    )
}

export default Unauth