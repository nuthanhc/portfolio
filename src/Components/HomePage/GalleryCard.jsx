import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Main.css";

const GalleryCards = ({ Title, Image, About}) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="card-details">
          <div className="card-image">
            <img src={`/images/${Image}.png`} alt="Project" loading="lazy" />
          </div>
          <div className="content-text">
            <h3 className="text-title">{Title}</h3>
            <p className="text-para">
              {About}
            </p>
          </div>
        </div>
        <div className="card-arrow">
          <i class="bi bi-caret-right-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
