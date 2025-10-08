import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home'
import Product from './Product'
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;