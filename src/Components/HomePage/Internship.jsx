import "bootstrap/dist/css/bootstrap.css";
import "../../Main.css";
import Certificate from "../Dialogs/Certificate";

const Internship = ({Title, Heading, About})=> {
  return (
    <div className="internship" id="internship">
      <h3 className="main-title">{Title}</h3>
      <div className="web">
        <h3 className="title text-center">{Heading}</h3>
        <p className="detail">
          {About}
        </p>
        <Certificate />
      </div>
    </div>
  );
}

export default Internship;
