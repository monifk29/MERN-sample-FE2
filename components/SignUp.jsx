import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() =>{
  const auth = localStorage.getItem("user");

  if(auth){
    navigate("/")
  }
  },[])

  const collectData = async () => {
    // console.log(name,email,pass)
    var result = await fetch("https://mern-sample.onrender.com/reg", {
      method: "post",
      body: JSON.stringify({ name, email, pass }),
      headers: {
        'Content-Type': "application/json"
      }
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("token",JSON.stringify(result.token));

    navigate("/");
    
  }



  return (
    <div className='reg'>
      <h1 style={{fontSize : "x-large", fontWeight : "700", marginBottom : "50px"}}   >REGISTER</h1>
      <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
      <input className='input' type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />

      <button onClick={collectData} className='submit'>Submit</button>


    </div>
  )

}
