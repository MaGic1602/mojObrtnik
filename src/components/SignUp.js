import React, { useState, useEffect } from "react";
import "./SignUp.css";
import woman from "./assets/images/woman.jpg";
import MarisInstance from "./axiosInstance";

export default function SignUp() {
  const [formValue, setFormValue] = useState({
    //initial state of object
    Name: "",
    email: "",
    password: "",
  });

  //posting to DB
  const handleSubmit = async () => {
    try {
      const response = await MarisInstance({
        method: "post",
        url: "/app/logIn",
        data: formValue,
        header: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //filling up the form
  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="signup-wrapper">
      <div className="form-container">
        <img className="img-woman" src={woman}></img>
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className="signup-h2">Registriraj se</h2>
          <input
            type="text"
            placeholder="Ime"
            name="Name"
            value={formValue.Name}
            onChange={handleChange}
            className="form-control"
          ></input>
          <input
            type="text"
            placeholder="e-mail"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="form-control"
          ></input>
          <input
            type="text"
            name="password"
            placeholder="Lozinka"
            value={formValue.password}
            onChange={handleChange}
            className="form-control"
          ></input>
          <input
            type="submit"
            className="submit-btn"
            value="Prijavi se"
          ></input>
          <h3 className="signup-h2">
            Postani član mojObrtnik i nudi svoje usluge svima kojima trebaju
          </h3>
        </form>
      </div>
    </div>
  );
}
