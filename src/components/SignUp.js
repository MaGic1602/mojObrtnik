import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import woman from "./assets/images/woman.jpg";
import MarisInstance from "./axiosInstance";

export default function SignUp() {
  const [formValue, setFormValue] = useState({
    //initial state of object
    Name: "",
    email: "",
    password: "",
    aboutMe: "",
    selection: "",
  });

  //posting to DB
  const handleSubmit = async () => {
    try {
      const response = await MarisInstance({
        method: "post",
        url: "/app/signup",
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
            placeholder="Ime koje će se prikazati na tvoj profilu"
            name="Name"
            value={formValue.Name}
            onChange={handleChange}
            className="form-control"
          ></input>
          <input
            type="text"
            placeholder="e-mail ili drugi kontakt"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="form-control"
          ></input>
          <input
            type="text"
            name="aboutMe"
            placeholder="Opis profila"
            value={formValue.aboutMe}
            onChange={handleChange}
            className="form-control"
          ></input>
          <select
            type="text"
            name="selection"
            value={formValue.selection}
            onChange={handleChange}
            className="form-control"
          >
            <option selected disabled>
              Ja sam:
            </option>
            <option value="dimnjacari">Dimnjačar</option>
            <option value="parketar-keramicar">Parketar/Keramičar</option>
            <option value="monter">Monter</option>
            <option value="limar">Limar</option>
            <option value="krovar">Krovar</option>
          </select>
          <input
            type="password"
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
          <h4 className="signup-h2">
            Več imaš račun?{" "}
            <Link className="login-btn" to="/login">
              Prijavi se
            </Link>{" "}
          </h4>
        </form>
      </div>
    </div>
  );
}
