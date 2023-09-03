import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import PetShopGallery from "../Gallery/PetShopGallery";
import HomeServiceGallery from "../Gallery/HomeServiceGallery";
import "../../Main.css";
import ProjectCards from "./ProjectCards";
import GalleryCards from "./GalleryCard";

function SkillSet() {
  return (
    <div className="skill_set" id="skillset">
      <h3 className="main-title">Mastering the Skillset</h3>
      <div className="web">
        <h3 className="title text-center">Web Technology</h3>
        <p className="detail">
          "Embarking on web development since college, I've crafted interactive
          solutions that blend form and function. Each project is an innovative
          journey, turning pixels into immersive user experiences. Join me in
          exploring limitless horizons, creating captivating digital
          landscapes."
        </p>
        <div className="card-holder">
          <h5 className="card-holder-heading text-center">Projects</h5>
          <div className="card-container">
            <ProjectCards
              Title="Pet Shop Management"
              Image="petlogo"
              About="In our 5th-semester DBMS project, Team of 2 members crafted
            a pet shop management system. This e-commerce platform
            enabled pet buying and selling, featuring authentication,
            pet listings, and carts. Our cohesive effort highlighted
            database, web development skills, and teamwork."
              GitLink="https://github.com/nuthanhc/getpets"
              WebLink="https://getpets.000.pe/"
              Gallery={<PetShopGallery />}
            />
            <ProjectCards
              Title="Home Service Management"
              Image="servicelogo"
              About=" At IRP Innovative Solutions, our intern team of three
            swiftly developed a home service management platform using
            existing APIs. In just a month, we created a versatile
            platform that offers various services - from plumbing to
            repairs. This project showcased our efficient teamwork and
            Web Development skills."
              GitLink=""
              WebLink="https://doarclab.com/"
              Gallery={<HomeServiceGallery />}
            />
          </div>
        </div>
      </div>
      <div className="web pt-5">
        <h3 className="title text-center">UI / UX Design</h3>
        <p className="detail">
          "I design UI/UX experiences that harmonize aesthetics and
          functionality, crafting intuitive interfaces for immersive digital
          journeys. Let's reshape the digital realm with captivating designs
          that redefine user interactions."
        </p>
        <Link to="/UiUxGallery">
          <GalleryCards
            Title="Design Delights: UI/UX Showcase"
            Image="uiuxlogo"
            About="Come Walk Through My Gallery of Design Delights: Explore
          the World of UI/UX Creations"
          />
        </Link>
      </div>
      <div className="web pt-5">
        <h3 className="title text-center">Graphic Design</h3>
        <p className="detail">
          "I merge creativity with design principles to craft impactful
          graphics. From concept to creation, I transform ideas into visuals,
          adding aesthetic brilliance. Let's bring your visions to life through
          captivating graphic designs."
        </p>
        <Link to="/GraphicGallery">
          <GalleryCards
            Title="Pixel Perfection: Visual Art Gallery"
            Image="gdlogo"
            About="Discover a Mesmerizing Journey through Creative Pixels and
          Visual Wonders."
          />
        </Link>
      </div>
    </div>
  );
}

export default SkillSet;
