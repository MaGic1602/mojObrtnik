import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Dimnjacari from "./components/Dimnjacari";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Dashboard />} path={"/dashboard"} />
        <Route element={<Homepage />} path={"/"} />
        <Route element={<Dimnjacari />} path={"/dimnjacari"} />
        <Route element={<SignUp />} path={"/logIn"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
