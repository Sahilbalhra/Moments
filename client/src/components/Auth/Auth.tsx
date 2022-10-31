import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

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
