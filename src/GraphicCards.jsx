import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import internship from "./images/internship.png";
import redesignedimage from "./images/redesignedimage.png";
import collegefest from "./images/collegefest.png";
import clientposter from "./images/clientposter.png";
import sg1 from "./images/Sciencedayposter.png";
import sg2 from "./images/happybirthdaycard.png";
import sg3 from "./images/collegecertificate.png";
import sg4 from "./images/collegeinvitation.png";
import sg5 from "./images/farewellbanner.png";
import sg6 from "./images/farewellposter.png"
import { FaFigma } from "react-icons/fa";

function GraphicCards() {
  return (
    <div className="uiux-cards">
      <div className="card-container">
        <h3 className="card-container-title">College Fest Poster's</h3>
        <div className="card-card">
          <div className="card-img">
            <img src={collegefest} alt="" loading="lazy"/>
          </div>
          <div className="card-text">
            <p>
              "As a vital part of the college fest organizing team, I led the
              design efforts in crafting an array of dynamic visuals. Utilizing
              Figma, my team conceptualized and designed captivating welcome
              banners, thematic event posters, event lists, and distinctive
              logos. This experience honed our collaborative skills, graphic
              design expertise, and event branding prowess."
            </p>
            <div className="card-links text-center pb-3">
              <a href="https://www.figma.com/file/axFZ38lZdeQWVmQmdPq4ji/Brochure?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1">
                <FaFigma /> View Figma File
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Client Shop Banner</h3>
        <div className="card-card-reverse">
          <div className="card-img">
            <img src={clientposter} alt="" loading="lazy"/>
          </div>
          <div className="card-text">
            <p>
              "Engaging in a client collaboration, I meticulously designed a
              striking shop banner. Combining the client's logo, vibrant
              imagery, and compelling text, I and my friend effectively
              communicated their shop's offerings. This project demonstrated my
              ability to translate client visions into impactful visuals,
              employing design tools and creative problem-solving to enhance
              their business presence."
            </p>
            <div className="card-links text-center pb-3">
              <a href="https://www.figma.com/file/axFZ38lZdeQWVmQmdPq4ji/Brochure?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1">
                <FaFigma /> View Figma File
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Isometric Design</h3>
        <div className="card-card">
          <div className="card-img">
            <img src={internship} alt="" loading="lazy"/>
          </div>
          <div className="card-text">
            <p>
              "During my internship, I meticulously crafted a pan shop layout
              using Figma, integrating diverse color schemes and layout styles.
              This project showcased my adeptness in spatial design,
              user-centered arrangement, and creative visualization. The layout
              design encompassed elements of usability, aesthetics, and
              functionality, resulting in a vibrant and engaging experience."
            </p>
            <div className="card-links text-center pb-3">
              <a href="https://www.figma.com/file/TAVjvpgNdGN4qRHhcdH5Tz/IRP-INTERNSHIP?type=design&node-id=24-60&mode=design&t=26yymBUzE9M5KXa8-0">
                <FaFigma /> View Figma File
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Gradient Desktop Wallpaper</h3>
        <div className="card-card-reverse">
          <div className="card-img">
            <img src={redesignedimage} alt="" loading="lazy"/>
          </div>
          <div className="card-text">
            <p>
              "In my initial foray into graphic design, I undertook the project
              of revamping an image. Using Figma, I employed various techniques
              like color correction, retouching, and composition enhancement.
              This endeavor marked my entry into visual storytelling, honing my
              skills in image manipulation, aesthetics, and visual
              communication."
            </p>
            <div className="card-links text-center pb-3">
              <a href="https://www.figma.com/file/WGHpx3d0bDu9EyXK7DU3PX/Untitled?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1">
                <FaFigma /> View Figma File
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Other Poster's & Banner's</h3>
        <div className="sub-gallery">
          <div class="gallery-card">
            <img src={sg1} alt="" loading="lazy"/>
          </div>
          <div class="gallery-card">
            <img src={sg2} alt="" loading="lazy"/>
          </div>
          <div class="gallery-card">
            <img src={sg4} alt="" loading="lazy"/>
          </div>
        </div>
        <div className="sub-gallery">
          <div class="gallery-card">
            <img src={sg3} alt="" loading="lazy"/>
          </div>
          <div class="gallery-card">
            <img src={sg5} alt="" loading="lazy"/>
          </div>
          <div class="gallery-card">
            <img src={sg6} alt="" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicCards;
