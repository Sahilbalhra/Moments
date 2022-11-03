import React, { useState } from "react";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/SignUp";

const Auth = () => {
  const [showForm, setShowForm] = useState(true);

  const handleForm = (data: boolean) => {
    setShowForm(data);
  };

  return (
    <>
      {showForm ? (
        <Login handleForm={handleForm} />
      ) : (
        <Signup handleForm={handleForm} />
      )}
    </>
  );
};

export default Auth;
