import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home";
import SignIn from "../sign-in";
import NotFound from "../not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
