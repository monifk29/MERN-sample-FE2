import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    },[]);

    const getProducts = async () => {
        let result = await fetch("https://mern-sample.onrender.com/products",{
            headers :{
                authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 
            }
        })
        result = await result.json();
        
        if(result)
{
    setProducts(result);
    console.log(result)
}       
    }

    const deleteProduct = async (id) => {
        console.log(id);
        let result = await fetch(`https://mern-sample.onrender.com/product/${id}`,{
            method :"Delete",
            headers :{
                authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 
            }

        })

        result = await result.json()

        if(result){
            alert("product is deleted")
            getProducts()
        }
     
    }

    const searchHandle = async (event) => {
        let   key = event.target.value;
        if(key){
            let result = await fetch(`https://mern-sample.onrender.com/search/${key}`,{
                headers :{
                    authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 
                }
            });
        result = await result.json();
        if(result){
            setProducts(result)
        }
        }
        else{
            getProducts()
        }
        
    }

    
    return ( 
        <div className='product-list'>
            <h3 style={{fontSize : "x-large", fontWeight : "700", marginBottom : "50px"}}>Product List</h3>

            <input onChange={searchHandle} className='search-pro' type="text" placeholder='Search'/>

             <ul className='header-table'> 
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
              <li>Company</li>

                <li>Operations</li>
            </ul> 
            {
               products.length>0 ? products.map((item,index) => 
        
            <ul key={item._id}> 
              <li>{index+1}</li>
              <li>{item.name}</li>
              <li>Rs {item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>

              <li>
              <button className='delete-btn' onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link className='update-link' to={`/update/${item._id}`}>Update</Link>
              </li>

            </ul>
             
                ) : <h3>No Result Found</h3>
            }
        </div>
    )
}

export default ProductList