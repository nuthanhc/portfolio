import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../Main.css";
import GraphicCards from "./GraphicCards";

function GraphicBody() {
  return (
    <div className="uiux-cards">
      <GraphicCards
        Title="College Fest Poster's"
        Class="card"
        Image="collegefest"
        About="As a vital part of the college fest organizing team, I led the
      design efforts in crafting an array of dynamic visuals. Utilizing
      Figma, my team conceptualized and designed captivating welcome
      banners, thematic event posters, event lists, and distinctive
      logos. This experience honed our collaborative skills, graphic
      design expertise, and event branding prowess."
        Link="https://www.figma.com/file/axFZ38lZdeQWVmQmdPq4ji/Brochure?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1"
      />
      <GraphicCards
        Title="Client Shop Banner"
        Class="card-reverse"
        Image="clientposter"
        About="Engaging in a client collaboration, I meticulously designed a
      striking shop banner. Combining the client's logo, vibrant
      imagery, and compelling text, I and my friend effectively
      communicated their shop's offerings. This project demonstrated my
      ability to translate client visions into impactful visuals,
      employing design tools and creative problem-solving to enhance
      their business presence."
        Link="https://www.figma.com/file/axFZ38lZdeQWVmQmdPq4ji/Brochure?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1"
      />
      <GraphicCards
        Title="Isometric Design"
        Class="card"
        Image="internship"
        About="During my internship, I meticulously crafted a pan shop layout
        using Figma, integrating diverse color schemes and layout styles.
        This project showcased my adeptness in spatial design,
        user-centered arrangement, and creative visualization. The layout
        design encompassed elements of usability, aesthetics, and
        functionality, resulting in a vibrant and engaging experience."
        Link="https://www.figma.com/file/TAVjvpgNdGN4qRHhcdH5Tz/IRP-INTERNSHIP?type=design&node-id=24-60&mode=design&t=26yymBUzE9M5KXa8-0"
      />
      <GraphicCards
        Title="Gradient Desktop Wallpaper"
        Class="card-reverse"
        Image="redesignedimage"
        About="In my initial foray into graphic design, I undertook the project
        of revamping an image. Using Figma, I employed various techniques
        like color correction, retouching, and composition enhancement.
        This endeavor marked my entry into visual storytelling, honing my
        skills in image manipulation, aesthetics, and visual
        communication."
        Link="https://www.figma.com/file/WGHpx3d0bDu9EyXK7DU3PX/Untitled?type=design&node-id=0%3A1&mode=design&t=26yymBUzE9M5KXa8-1"
      />
      <div className="card-container">
        <h3 className="card-container-title">Other Poster's & Banner's</h3>
        <div className="sub-gallery">
          <div class="gallery-card">
            <img src="/images/Sciencedayposter.png" alt="" loading="lazy" />
          </div>
          <div class="gallery-card">
            <img src="/images/happybirthdaycard.png" alt="" loading="lazy" />
          </div>
          <div class="gallery-card">
            <img src="/images/collegeinvitation.png" alt="" loading="lazy" />
          </div>
        </div>
        <div className="sub-gallery">
          <div class="gallery-card">
            <img src="/images/collegecertificate.png" alt="" loading="lazy" />
          </div>
          <div class="gallery-card">
            <img src="/images/farewellbanner.png" alt="" loading="lazy" />
          </div>
          <div class="gallery-card">
            <img src="/images/farewellposter.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicBody;
