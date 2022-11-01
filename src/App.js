import React from "react";
import { Routes, Route } from "react-router-dom";

// import './App.css';

import CompNav from "./components/compNav/compNav.components";
import CompHome from "./components/compHome/compHome.components";
import Login from "./components/loginWithGooglePopUp/login.component";
import Login2 from "./components/loginWithGoogleRedirect/login.component";
import Register from "./components/RegisterWithEmailAndPassword/register.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<CompHome/>}>
          <Route index element={<CompNav/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="login2" element={<Login2/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
