import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,useParams } from 'react-router-dom';
import './AllItems.css';

export default function UpdateStudent(props) {
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
        console.error("Error fetching student data:", error);
      });
  }, [id]);
  

  const handleUpdate = () => {
   
    axios.put(`http://localhost:8070/item/Iupdate/${id}`, {
        ItemName,
        Category,
        QuantityInStock: parseInt(QuantityInStock),
        UnitPrice: parseInt(UnitPrice),  
        Suppliers,
    })
      .then(() => {
        console.log("Item updated successfully");
        alert("Item updated");
        navigate('/');
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  return (
    <div className="form-container">
      <form>
      <h2>Update Item</h2>
        <div className="form-group">
          <label htmlFor="ItemName">ItemName:</label>
          <input
            type="text"
            id="ItemName"
            value={ItemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Category">Category:</label>
          <input
            type="text"
            id="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="QuantityInStock">QuantityInStock:</label>
          <input
            type="number"
            id="QuantityInStock"
            value={QuantityInStock}
            onChange={(e) => setQuantityInStock(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">UnitPrice:</label>
          <input
            type="number"
            id="UnitPrice"
            value={UnitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Suppliers:</label>
          <input
            type="text"
            id="Suppliers"
            value={Suppliers}
            onChange={(e) => setSuppliers(e.target.value)}
          />
        </div>

        {/* Uncomment the following block if you want to use a dropdown for gender */}
        {/* <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> */}

        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
}

