import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import {  MdOutlineDelete } from 'react-icons/md';
import './AllItems.css';

export default function AllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getItems() {
      axios.get("http://localhost:8070/item/I")
        .then((res) => {
            setItems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getItems();

  }, []);

  return (
    <div className="container">
      <h1>All Items</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ItemName</th>
            <th>Category</th>
            <th>QuantityInStock</th>
            <th>UnitPrice</th>
            <th>Suppliers</th>
            <th>Actions</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.ItemName}</td>
              <td>
                <Link to={`/category/${item.Category}`}>{item.Category}</Link>
              </td>
              <td>{item.QuantityInStock}</td>
              <td>{item.UnitPrice}</td>
              <td>{item.Suppliers}</td>
              <td>
              <Link to={{ pathname: `/update/${item._id}`, state: { item } }}>
              <AiOutlineEdit className='text-2x1 text-yellow-600' />
              </Link>
              <Link to={{ pathname: `/delete/${item._id}`, state: { item } }}>
              <MdOutlineDelete className='text-2x1 text-red-600' />
              </Link> 

              </td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
