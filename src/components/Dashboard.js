import React from "react";
import kuca from "./assets/images/imageToMap.jpg";
import roof from "./assets/images/roof.jpg";
import window from "./assets/images/window.jpg";
import chimney from "./assets/images/chimney.jpg";
import lim from "./assets/images/lim.jpg";
import parket from "./assets/images/parket.jpg";

import "./Dashboard.css";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const handleOnClick = (e) => {};

export default function Dashboard() {
  return (
    <div className="wrapper">
      <div className="title-header">
        <h2>
          Klikni na dio kuće koji treba popravak ili odaberi iz izbornika!
        </h2>
      </div>
      <div className="body-container">
        <div className="house-container">
          <img src={kuca} alt="house" useMap="#workmap" />
          <map id="workmap" name="workmap">
            <area
              shape="poly"
              coords="215,253,252,256,253,325,213,306"
              alt="doors"
              href="bravari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="121,164,328,41,431,57,228,178"
              alt="roof"
              href="krovari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="222,181,429,56,433,104,431,143,473,143,493,123,549,182,348,301"
              alt="roof2"
              href="krovari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="453,102,455,89,470,104,472,141,449,154,436,147"
              alt="chimeny"
              href="dimnjacari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="152,192,193,215,193,281,150,256"
              alt="window"
              href="staklari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="272,256,299,274,300,332,273,326"
              alt="window2"
              href="staklari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="400,275,442,250,442,311,405,329"
              alt="window3"
              href="staklari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="469,235,509,211,512,271,470,291"
              alt="window4"
              href="staklari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="316,402,557,260,565,300,312,445"
              alt="fence"
              href="limari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="57,263,103,235,119,266,60,303"
              alt="fence2"
              href="limari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="37,311,35,348,312,503,312,467"
              alt="floor"
              href="keramicariParketari"
              onClick={handleOnClick}
            />
            <area
              shape="poly"
              coords="312,466,587,305,591,348,313,506"
              alt="floor2"
              href="keramicariParketari"
              onClick={handleOnClick}
            />
          </map>
        </div>

        <div className="images-container">
          <ImageCard
            imageUrl={chimney}
            title="Dimnjačari"
            description="dimnjacari"
            linkTo={"/dimnjacari"}
          ></ImageCard>
          <ImageCard
            imageUrl={roof}
            title="Krovari"
            description="krovari"
            linkTo={"/krovari"}
          ></ImageCard>
          <ImageCard
            imageUrl={window}
            title="Monteri"
            description="monteri"
            linkTo={"/staklari"}
          ></ImageCard>
          <ImageCard
            imageUrl={lim}
            title="Limari"
            description="limari"
            linkTo={"/limari"}
          ></ImageCard>
          <ImageCard
            imageUrl={parket}
            title="Parketari"
            description="parketari"
            linkTo={"/keramicariParketari"}
          ></ImageCard>
        </div>
      </div>
    </div>
  );
}
