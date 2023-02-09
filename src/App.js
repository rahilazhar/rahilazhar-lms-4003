import React from "react";
import container from "./Container/Container.css"
import Navbar from "./Components/Navbar"
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import { Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";

const App = () =>{


return(
  <>
  <div className="container-fluid">
  <Navbar   Home="Home"  About="About"  Contact="Contact Us"  Signup="Sign Up"  Login="Login"/></div>


<Routes>

<Route path="/" element = {<Home/>}></Route>
<Route path="/About" element = {<About/>}></Route>
<Route path="/ContactUs" element = {<ContactUs/>}></Route>
<Route path="/Login" element = {<Login/>}></Route>
<Route path="/Signup" element = {<Signup/>}></Route>


</Routes>

  </>
)
}










export default App;