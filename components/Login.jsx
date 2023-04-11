import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const  Login = () => {

    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("");

    const navigate = useNavigate();

    useEffect(() =>{
        const auth = localStorage.getItem("user");
      
        if(auth){
          navigate("/")
        }
        },[])

    const handleLogin = async ()=> {
        console.log(email,pass)
        let result = await fetch("https://mern-sample.onrender.com/login",{
            method : "post",
            body : JSON.stringify({email,pass}),
            headers : {
                "Content-Type" : "application/json"
            }
        });

        result = await result.json();
        console.log(result)

        if(result.token){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.token));
        navigate("/")
        }
        else{
            alert("ENTER CORRECT INFO")
        }
    }
    
  
    return (
      <div className='login'>

        <input className='input' type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        <input className='input' type="password" value={pass} placeholder="Enter Password" onChange={(e) => setPass(e.target.value)}/>

      <button onClick={handleLogin} className='submit'>Log In</button>


      </div>
    )
  
}

