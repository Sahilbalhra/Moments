import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import PostDetail from "./components/Posts/Post/PostDetail";
import Form from "./components/Forms/Form";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Form />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/post/:id' element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
