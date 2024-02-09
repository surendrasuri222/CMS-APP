import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import Page from "./components/Page";
import Users from "./components/Users";
import User from "./components/User";
import Categories from "./components/Categories";
import Signin from "./components/Signin";
import Logout from "./components/Logout";
import Signup from "./components/SignUp";
import './css/bootstrap.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import EditUsers from "./components/EditUsers";
import Profile from "./components/Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userprofile from "./components/Userprofile";


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (

    <>
      <Navbar />
      <ToastContainer />

      <Routes>

        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/page" element={<Page />} />
        {/* <Route path="/pages/edit" element={<EditPages />} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/users/user" element={<User />} />
        <Route path="/users/edit" element={<EditUsers />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>
    </>

  );
}

export default App;
