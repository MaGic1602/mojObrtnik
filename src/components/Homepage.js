import React from "react";
import "./Homepage.css";
import obrtnici from "./assets/images/obrtnici.jpg";
import prospekt from "./assets/textFiles/prospect.txt";

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <img className="obrtnici" src={obrtnici} alt="obrtnici"></img>
      <div className="text-container">
        Renoviraš kuću ali neznaš gdje početi?<br></br> Mate kojeg ti je
        preporučila susjeda nije slobodan još 6 mjeseci?<br></br>
        Potraži željenog obrtnika nikad lakše!
      </div>
      <div className="download-container">
        <a className="download-link" href={prospekt} download>
          Klikni
        </a>
        <span>&nbsp;&nbsp;</span>i preuzmi prospekt mojObrtnik za listanje na
        kavi
      </div>
    </div>
  );
}
