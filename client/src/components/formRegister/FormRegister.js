import React from "react";
import { useDispatch } from "react-redux";
import { testact } from "../../actions/auth.actions";
import { test } from "../../usecases/SignIUp";
import "./formRegister.css";

const FormRegister = () => {
  const dispatch = useDispatch();

  const onRegisterClick = () => {
    // dispatch(test)
    // test();
    dispatch(testact());
    console.log("submit");
  };
  return (
    <div className="container">
      {/* <form onSubmit={handleSubmit} className="form-register"> */}
      <h3>Register</h3>
      <input type="text" name="firsname" placeholder="First Name" value="" />
      <input type="text" name="lastname" placeholder="Last Name" value="" />
      <input type="text" name="username" placeholder="Username" value="" />
      <input type="password" name="password" placeholder="Password" value="" />
      <input type="password" name="password" placeholder="Password" value="" />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value=""
      />
      {/* <button type="submit">Resgister</button> */}

      <button onClick={onRegisterClick}>Resgister</button>
      {/* <button onClick={onLoginClick}>Login</button> */}
      {/* </form> */}
    </div>
  );
};

export default FormRegister;
