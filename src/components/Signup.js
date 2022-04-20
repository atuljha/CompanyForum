import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import UserService from "../services/UserService";

export default function Signup() {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick() {
    UserService.create(data).then((res) => {
      console.log(res.data);
      localStorage.setItem("id", res.data._id);
      localStorage.setItem(
        "name",
        `${res.data.firstName} ${res.data.lastName}`
      );

      navigate("/home");
    });
  }

  return (
    <div className='login signup'>
      <div className='signup_form'>
        <div className='signup_final'>
          <h2>SIGN UP</h2>

          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={data.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={data.password}
            onChange={handleChange}
          />
          <Button
            variant='outlined'
            onClick={handleClick}
            style={{
              color: "white",
              border: "2px solid white",
              marginTop: "40px",
              marginBottom: "20px",
              backgroundColor: "green",
            }}>
            {" "}
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
