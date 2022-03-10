import React from "react";
import "./ImageCard.css";

export default function ImageCard(props) {
  return (
    <div className="img-card">
      <a className="links-a" href={props.linkTo}>
        <div className="img-container">
          <img
            className="img-card-img"
            src={props.imageUrl}
            alt={props.description}
          ></img>
        </div>
        <div className="img-label">{props.title}</div>
      </a>
    </div>
  );
}
