import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const AddProduct = () => {

    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[category,setCategory] = useState("")
    const[company,setCompany] = useState("")
    const[error,setError] = useState(false)

    const navigate = useNavigate();

    const addProduct = async () => {
        // console.log(name,price,company)
        if(!name || !price || !category || !company){
            setError(true)
            return false
        }

       var userId = JSON.parse(localStorage.getItem("user"))._id;

        let result = await fetch("https://mern-sample.onrender.com/add-product",{
            method:"post",
            body : JSON.stringify({name,price,company,category,userId}),
            headers : {
                "Content-Type" : "application/json",
        authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 

            }
        });
             result = await result.json();
             console.log(result);
             navigate("/")
            
             alert("Product have been succesfuly added");
    }
    

  return (
    <div className='product'>
        <h1>AddProduct</h1>
        <input className='input' value={name} type="text" placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)}/>
        {error && !name && <span className='invalid-input'>Enter valid Name</span>}
        
        <input className='input' value={price} type="text" placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)}/>
        {error && !price && <span className='invalid-input'>Enter valid Price</span>}
       
        <input className='input' value={category} type="text" placeholder="Enter Product Category" onChange={(e) => setCategory(e.target.value)}/>
        {error && !category && <span className='invalid-input'>Enter valid Category</span>}
       
        <input className='input' value={company} type="text" placeholder="Enter Company Name" onChange={(e) => setCompany(e.target.value)}/>
        {error && !company && <span className='invalid-input'>Enter valid Name</span>}

        <button onClick={addProduct} className='submit'>Add Product</button>
    </div>
  )
}

export default AddProduct