import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Main.css";

const ProjectCards = ({ Title,Image, About, GitLink, WebLink, Gallery }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={`/images/${Image}.png`} alt="Project" loading="lazy" />
        </div>
        <div className="content">
          <h3 className="card-title text-center">{Title}</h3>
          <p className="card-info">{About}</p>
        </div>
      </div>
      <div className="card-links">
        <a href={GitLink}>
          <i className="bi bi-github"></i>
        </a>
        <a href={WebLink}>
          <i class="bi bi-link"></i>
        </a>
        {Gallery}
      </div>
    </div>
  );
};

export default ProjectCards;
