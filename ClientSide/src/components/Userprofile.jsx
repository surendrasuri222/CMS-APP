import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Userprofile() {
    const [data, setData] = useState({
        name: "",
        email: "",
    })
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    },)

    const handleUserProfile = async () => {
        const response = await fetch('http://localhost:4000/api/userprofile', {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `jwt ${localStorage.getItem('token')}`
            }
        })

        const dataResponse = await response.json()
        setData(dataResponse.data)
    }

    useEffect(() => {
        if (token) {
            handleUserProfile()
        }
    }, [])

    return (
        <div className='h-screen-center'>

            <div className='user-profile'>
                <div className='user-profile-icon'>
                    <i class="fa-solid fa-user-tie fa-3x"></i>
                </div>
                <img src='ddvd.jpg' alt='Image of the User' />


            </div>
            <div>
                <div>
                    <h1>Users Name</h1>
                    <h1 className='user-name'>{data?.name}</h1>

                </div>
                <div>
                    <h1>Users Email</h1>
                    <p className='user-email'>{data?.email}</p>

                </div>
            </div>



        </div>
    )
}

export default Userprofile