import Breadcrumb from "../components/Breadcrumb";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";
import gallery9 from "../assets/images/gallery9.jpg";
import gallery10 from "../assets/images/gallery10.jpg";
import gallery11 from "../assets/images/Open_Space.jpg";
import gallery12 from "../assets/images/campus4.jpg";
import gallery13 from "../assets/images/doubleBed.jpg";

const Gallery = () => {
  return (
    <div>

      <Breadcrumb title="Gallery" />
      <div className="gallery">
        <h1 className="gallery-text">Home Away From Home</h1>

        <div className="row">
          <div className="facilities-col">
            <img src={gallery1} alt="Gallery 1" />
          </div>
          <div className="facilities-col">
            <img src={gallery2} alt="Gallery 2" />
          </div>
          <div className="facilities-col">
            <img src={gallery3} alt="Gallery 3" />
          </div>
        </div>

        <div className="row">
          <div className="facilities-col">
            <img src={gallery4} alt="Gallery 4" />
          </div>
          <div className="facilities-col">
            <img src={gallery5} alt="Gallery 5" />
          </div>
          <div className="facilities-col">
            <img src={gallery6} alt="Gallery 6" />
          </div>
        </div>

        <div className="row">
          <div className="facilities-col">
            <img src={gallery7} alt="Gallery 7" />
          </div>
          <div className="facilities-col">
            <img src={gallery8} alt="Gallery 8" />
          </div>
          <div className="facilities-col">
            <img src={gallery13} alt="Gallery 9" />
          </div>
        </div>

        <div className="row">
          <div className="facilities-col">
            <img src={gallery10} alt="Gallery 10" />
          </div>
          <div className="facilities-col">
            <img src={gallery11} alt="Gallery 10" />
          </div>
          <div className="facilities-col">
            <img src={gallery12} alt="Gallery 10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
