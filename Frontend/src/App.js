import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp"
import Items from "./Items";
import AddItem from "./AddItem";
import Employees from "./Employees";
import AddEmployee from "./AddEmployee";
//import ProductById from "./ProductById";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import UpdateItem from "./UpdateItem";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/items" element={<Items/>}></Route>
          <Route path="/employees" element={<Employees/>}></Route>
          <Route path="/addemployee" element={<AddEmployee/>}></Route>
          <Route path="/additem" element={<AddItem/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/update" element={<UpdateItem/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
