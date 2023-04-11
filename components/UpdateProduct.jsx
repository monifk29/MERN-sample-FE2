import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, []);

 const getProductDetails = async () => {
  let result = await fetch(`https://mern-sample.onrender.com/${params.id}`,{
    headers :{
        authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 
    }
  });
  result = await result.json()
  console.log(result)
setName(result.name)
setPrice(result.price)
setCompany(result.company)
setCategory(result.category)
 }

  const updateProduct = async () => {
    console.log(name, price, category, company);

    let result = await fetch(`https://mern-sample.onrender.com/product/${params.id}`,{
        method : "put",
        body : JSON.stringify( {
            name,price,company,category
        }),
        headers : {
            "Content-Type" : "application/json",
        authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` 

        }
    })
    result = await result.json();
    navigate("/")
  };

  return (
    <div className="product">
      <h3>Update Product</h3>
      <input
        className="input"
        value={name}
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        value={price}
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="input"
        value={category}
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="input"
        value={company}
        type="text"
        placeholder="Enter Company Name"
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={updateProduct} className="submit">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
