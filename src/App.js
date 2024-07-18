import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Page from "./Components/Page";
import { Router, useHistory } from 'react-router-dom';
import ManagerPage from "./Components/ManagerPage";
import ManagerLandingPage from "./Components/ManagerLandingPage";


import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ManagerLandingPage" element={<ManagerLandingPage/>} />
        <Route path="/ManagerPage" element={<ManagerPage />} />
        
      </Routes>
    </>
  );
}

export default App;
