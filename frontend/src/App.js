import './App.css';
import React from 'react';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import AllItems from './components/Item/AllItems';
import AddItem from './components/Item/AddItem';
import UpdateItem from './components/Item/UpdateItem';
import DeleteItem from './components/Item/DeleteItem';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>

        <Routes>
          <Route path="/update/:id" element={<UpdateStudent />} />
          {/* Other routes as needed */}
        </Routes>

        <Routes>
          <Route path="/delete/:id" element={<DeleteStudent />} />
          {/* Other routes as needed */}
        </Routes>


        <Routes>
          <Route path="/" element={<AllStudents />} />
        </Routes>


        <Routes>
          <Route path="/Iadd" element={<AddItem />} />
        </Routes>

        <Routes>
          <Route path="/Iupdate/:id" element={<UpdateItem />} />
        </Routes>

        <Routes>
          <Route path="/Idelete/:id" element={<DeleteItem />} />
        </Routes>

        <Routes>
          <Route path="/I" element={<AllItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
