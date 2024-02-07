import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './components/Navbar';
import Books from './components/Books';
import Book from "./components/Book";
import Users from "./components/Users";
import User from "./components/User";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Logout from "./components/Logout";

import SignUp from "./components/SignUp";
import './css/bootstrap.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import EditUsers from "./components/EditUsers";
import EditBooks from "./components/EditBooks";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/book" element={<Book />} />
        <Route path="/books/edit" element={<EditBooks />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/user" element={<User />} />
        <Route path="/users/edit" element={<EditUsers />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>
    </>

  );
}

export default App;
