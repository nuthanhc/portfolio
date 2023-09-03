import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../Main.css";
import { FaFigma } from "react-icons/fa";

const UiUxCards = ({ Title, Class, Image, About, Reference }) => {
  return (
    <div className="card-container">
      <h3 className="card-container-title">{Title}</h3>
      <div className={`card-${Class}`} >
        <div className="card-img">
          <img src={`/images/${Image}.png`} alt="" loading="lazy" />
        </div>
        <div className="card-text">
          <p>"{About}"</p>
          <div className="card-links text-center pb-3">
            <a href={Reference}>
              <FaFigma /> View Figma File
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxCards;
