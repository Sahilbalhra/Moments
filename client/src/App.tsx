import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import PostDetail from "./components/Posts/Post/PostDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/post' element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
