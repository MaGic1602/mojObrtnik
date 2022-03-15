import React from "react";
import "./ProfileGallery.css";
import avatar from "./assets/images/avatar.jpg";

export default function ProfileGallery(props) {
  return (
    <div className="profile-gallery-wrapper">
      <img className="img-avatar" src={avatar}></img>

      <div className="avatar-contact">{props.email}</div>
      <div className="avatar-label-sec">{props.title}</div>
      <div className="avatar-about-me">{props.aboutMe}</div>
    </div>
  );
}
