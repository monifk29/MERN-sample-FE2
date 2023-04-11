import React from 'react'
import { Link, useNavigate } from "react-router-dom"

export const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear()
        // console.log("apple")
        navigate("/signup")
    }

    return (
        <div>
            <img className='logo' alt='logo' src="https://imgs.search.brave.com/LTFMuPGb6UaPpH3fgYzfODnjQ7X4dqF8DFD8AHMydY4/rs:fit:668:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/T3J1TU9qZGM1encz/Sk1OS3hUNlVnSGFG/USZwaWQ9QXBp" />
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                {/* <li><Link to="/update">Update Product</Link></li>    */}
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup" onClick={Logout}>Logout ({JSON.parse(auth).name})</Link></li>

            </ul>
                :
                <ul className='nav-ul nav-right'>

                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>

                </ul>
            }
        </div>
    )

}
