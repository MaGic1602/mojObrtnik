import React, { useState, useEffect } from "react";
import "./ProfileGallery";
import ProfileGallery from "./ProfileGallery";
import "./Dimnjacari.css";
import axios from "axios";

export default function Limari() {
  const [isLoading, setLoading] = useState(true);
  const [values, setValues] = useState({});

  useEffect(() => {
    getValues();
  }, []);

  const getValues = () => {
    axios
      .get("http://localhost:4000/app/limari", {
        params: { selection: "limar" },
      })
      .then((response) => {
        setValues(response.data);
        setLoading(false);
      });
  };
  console.log(values);

  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(values);
  return (
    <div className="dimnjacari-wrapper">
      {Object.entries(values || []).map(([key, value]) => {
        return (
          <ProfileGallery
            email={value.email}
            title={value.Name}
            aboutMe={value.aboutMe}
          ></ProfileGallery>
        );
      })}
    </div>
  );
}
