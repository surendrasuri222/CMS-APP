import { Routes, Route } from "react-router-dom";
import Dashboard from './Components';
import Page from './Components/pages';
import Users from "./Components/users";
import Categories from "./Components/categories";
import LogOut from "./Components/logout";
import Index1 from "./Components/index1";




function App() {
  return (

    <>
      <Dashboard />
      <Routes>

        <Route path="/pages" element={<Page />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path='/index' element={<Index1 />} />



      </Routes>



    </>

  );
}

export default App;
