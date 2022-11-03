import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./Pages/Auth/Auth";
import PostDetail from "./Pages/Post/PostDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/post/:id' element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
