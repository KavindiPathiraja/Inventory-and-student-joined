import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './AllItems.css';

export default function AddItem(){

    const[ItemName,setItemName] = useState("");
    const[Category,setCategory] = useState("");
    const[QuantityInStock,setQuantityInStock] = useState("");
    const[UnitPrice,setUnitPrice] = useState("");
    const[Suppliers,setSuppliers] = useState("");
    const navigate = useNavigate();

    function sendData(e){
        e.preventDefault();
        

        const newItem = {

            ItemName,
            Category,
            QuantityInStock,
            UnitPrice,
            Suppliers
        }
        console.log(newItem);

        axios.post("http://localhost:8070/item/Iadd",newItem).then(()=>{
            alert("Item Added")

            setItemName("");
            setCategory("");
            setQuantityInStock("");
            setUnitPrice("");
            setSuppliers("");
            navigate('/');

        }).catch((err)=>{
            alert(err)
        })
        
    }


    return(
       
       <div className="form-container">
        <form onSubmit={sendData}>
        <h2>Create Item</h2>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Item Name</label>
            <input type="text" className="form-control" id="ItemName" placeholder="Enter ItemName" onChange={(e)=>{

                setItemName(e.target.value);

            }}/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Category</label>
            <input type="text" className="form-control" id="Category" placeholder="Enter Category" onChange={(e)=>{

                setCategory(e.target.value);

            }}/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="gender" className="form-label">Quantity In Stock</label>
            <input type="text" className="form-control" id="QuantityInStock" placeholder="Enter Quantity In Stock" onChange={(e)=>{

                setQuantityInStock(e.target.value);

            }}/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">UnitPrice</label>
            <input type="text" className="form-control" id="UnitPrice" placeholder="Enter UnitPrice" onChange={(e)=>{

                setUnitPrice(e.target.value);

            }}/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Suppliers</label>
            <input type="text" className="form-control" id="Suppliers" placeholder="Enter Suppliers" onChange={(e)=>{

                setSuppliers(e.target.value);

            }}/>
            
        </div>
        
             <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )


}
