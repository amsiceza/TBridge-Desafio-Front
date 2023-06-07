import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice.js";


const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const { name, surname, email, password } = formData;

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData))
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="name" />
      <input type="text" name="surname" value={surname} onChange={onChange} placeholder="surname"/>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="email"/>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
