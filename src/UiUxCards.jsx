import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import notification from "./images/notificationbar.png";
import screenloading from "./images/screenloading.png";
import dishes from "./images/dishes.png";
import cosmetic from "./images/cosmetic.png";
import loginpage from "./images/loginpage.png";
import foodie from "./images/foodie.png";

function UiUxCards() {
  return (
    <div className="uiux-cards">
      <div className="card-container">
        <h3 className="card-container-title">Notification Bar UI</h3>
        <div className="card-card">
          <div className="card-img">
            <img src={notification} alt="" />
          </div>
          <div className="card-text">
            <p>
              "Leveraging Figma, I conceptualized and tailored a unique
              notification bar UI, harmonizing it with my vision. Through
              wireframes, I transformed the template into a functional
              interface, marrying user-friendly design and interactive elements.
              My utilization of Figma's capabilities exemplified my attention to
              detail, user-centric approach, and aptitude for UI design."
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Screen Loading UI</h3>
        <div className="card-card-reverse">
          <div className="card-img">
            <img src={screenloading} alt="" />
          </div>
          <div className="card-text">
            <p>
              "Leveraging Figma's design capabilities, I crafted two distinct
              screen-loading UI templates that exhibit creativity and
              efficiency. By experimenting with animations, color schemes, and
              layouts, I effectively communicated loading processes. These
              templates reflect my proficiency in user experience design and my
              ability to create engaging and visually appealing interfaces."
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Food App UI</h3>
        <div className="card-card">
          <div className="card-img">
            <img src={dishes} alt="" className="hover-zoom" />
          </div>
          <div className="card-text">
            <p>
              "Utilizing Figma, I designed an appealing food delivery app UI
              template that showcases individual dishes along with their
              ingredients. The template highlights my expertise in visual
              hierarchy, typography, and user-centered design. Through intuitive
              layouts and enticing visuals, I effectively conveyed the dish's
              details, enhancing the overall user experience."
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Cosmetic App UI</h3>
        <div className="card-card-reverse">
          <div className="card-img">
            <img src={cosmetic} alt="" className="hover-zoom" />
          </div>
          <div className="card-text">
            <p>
              "Leveraging Adobe XD capabilities, I crafted a captivating
              single-page Cosmetic App UI that combines aesthetics and
              functionality. Through color palettes, typography, and imagery, I
              ensured a visually engaging user experience. The template
              exemplifies my proficiency in responsive design, layout
              composition, and creating an immersive environment for cosmetic
              products."
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Login Page UI</h3>
        <div className="card-card">
          <div className="card-img">
            <img src={loginpage} alt="" className="hover-zoom" />
          </div>
          <div className="card-text">
            <p>
              "During the initial stages of my UI/UX learning journey, I
              designed a Login Page UI using Adobe XD. This project reflects my
              foundational understanding of user interfaces, emphasizing
              user-friendly elements such as input fields, buttons, and visual
              hierarchy. It showcases my growth in layout design, and basic
              interaction principles."
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h3 className="card-container-title">Food Article UI</h3>
        <div className="card-card-reverse">
          <div className="card-img">
            <img src={foodie} alt="" className="hover-zoom" />
          </div>
          <div className="card-text">
            <p>
              ""Foodie" stands as my debut UI achievement, a single-page design
              crafted using Adobe XD. This project signifies my early
              exploration into interface design, featuring captivating visuals,
              engaging color schemes, and intuitive navigation. This template
              demonstrates my grasp of layout, typography, and creating
              appealing user experiences, marking my journey's inception in UI
              design."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiUxCards;
