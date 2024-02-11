import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import Page from "./components/Page";
import Users from "./components/Users";
import User from "./components/User";
import Categories from "./components/Categories";
import Signin from "./components/Signin";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import './css/bootstrap.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import EditUsers from "./components/EditUsers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userprofile from "./components/Userprofile";
import ProfileEdit from "./components/ProfileEdit";
import NewUser from "./components/NewUser";
import { NewAndEdit } from "./components/NewAndEdit";
import Search from "./components/Search";
import NewPage from "./components/NewPage";


function App() {
  return (

    <>
      <Navbar />
      <ToastContainer />

      <Routes>

        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/pages/edit" element={<EditPages />} /> */}
        <Route path="/users" element={<Users />} />
        {/* <Route path="/users/edit" element={<EditUsers />} /> */}
        <Route path="/users/add" element={<NewUser />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/add" element={<NewPage />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/pages/edit/:id" element={<NewAndEdit />} />
        <Route path="/page/new" element={<NewAndEdit />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/userprofile/edit" element={<ProfileEdit />} />
        <Route path="/users/user/:id" element={<User />} />
        <Route path="/users/edit" element={<EditUsers />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/search" element={<Search />} />


      </Routes>
    </>

  );
}

export default App;
