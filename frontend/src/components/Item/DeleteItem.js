import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import './AllItems.css';

export default function DeleteStudent(props) {
  const { id } = useParams();
  const[ItemName,setItemName] = useState("");
  const[Category,setCategory] = useState("");
  const[QuantityInStock,setQuantityInStock] = useState("");
  const[UnitPrice,setUnitPrice] = useState("");
  const[Suppliers,setSuppliers] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ID from useParams:", id);
    axios.get(`http://localhost:8070/item/Iget/${id}`)
      .then((response) => {
        const { ItemName, Category, QuantityInStock , UnitPrice , Suppliers } = response.data.item; 
        setItemName(ItemName);
        setCategory(Category);
        setQuantityInStock(QuantityInStock.toString()); 
        setUnitPrice(UnitPrice.toString());
        setSuppliers(Suppliers);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [id]);
  

  const handleDelete = () => {
    
    axios.delete(`http://localhost:8070/item/Idelete/${id}`, {
        ItemName,
        Category,
        QuantityInStock: parseInt(QuantityInStock),
        UnitPrice: parseInt(UnitPrice),  
        Suppliers,
    })
      .then(() => {
        console.log("Item deleted successfully");
        alert("Item deleted");
        navigate('/');
        // Redirect to the students list page after updating
       // window.location.href = "/AllStudents";
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div>
      
      <form>
      <h2>Delete Item</h2>
        <label>ItemName:</label>
        <input type="text" value={ItemName} onChange={(e) => setItemName(e.target.value)} readOnly />

        <label>Category:</label>
        <input type="text" value={Category} onChange={(e) => setCategory(e.target.value)} readOnly />

        <label>QuantityInStock:</label>
          <input type="number" value={QuantityInStock} onChange={(e) => setQuantityInStock(Number(e.target.value))} readOnly/>

        <label>UnitPrice:</label>
          <input type="number" value={UnitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))} readOnly/>

        <label>Suppliers:</label>
          <input type="text" value={Suppliers} onChange={(e) => setSuppliers(e.target.value)} readOnly/>

          {/* <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select> */}


        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}
