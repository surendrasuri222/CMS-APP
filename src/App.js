import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Index';
import Pages from './Components/Pages';
import Users from "./Components/Users";
import Categories from "./Components/Categories";
import Logout from "./Components/Logout";
import Dashboard from "./Components/Dashboard";

function App() {
  return (

    <>
      <Navbar />
      <Routes>
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
