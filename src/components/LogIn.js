import React from "react";
import man from "./assets/images/aboutImage.jpg";

export default function LogIn() {
  return (
    <div className="signup-wrapper">
      <div className="form-container">
        <img className="img-woman" src={man}></img>
        <form className="signup-form">
          <h2 className="signup-h2">Prijavi se</h2>
          <input
            className="form-control"
            type="text"
            placeholder="Korisničko ime"
            name="Name"
          ></input>
          <input
            className="form-control"
            type="password"
            placeholder="Lozinka"
          ></input>
          <input
            className="submit-btn"
            value="Prijavi se"
            type="submit"
          ></input>
        </form>
      </div>
    </div>
  );
}
