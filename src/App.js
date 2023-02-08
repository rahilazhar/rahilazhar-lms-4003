import React from "react";
import container from "./Container/Container.css"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"

const App = () =>{


return(
  <>
  <div className="Container-fluid">
  <div><Navbar   Home="Home"  StudentServices="Student Services"  Courses="Courses"/></div>
  <div><Login/></div>
  </div>
  </>
)
}










export default App;