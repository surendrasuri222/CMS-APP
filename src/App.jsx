import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import Users from "./components/Users";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>

  );
}

export default App;
