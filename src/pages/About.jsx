import Breadcrumb from "../components/Breadcrumb";
import about from "../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Jyothi Nilaya</h1>
            <p>
              <b>
                Jyothi Nilaya Girl's Hostel
              </b>
              <br />
              Mother Macrina, the Superior General, requested the Most Rev. D Simon Lourdusamy, the Archbishop of Bangalore, to permit to start a Kannada Medium School in Bangalore. In response to this, on 5th July 1971 Jyothi Nilaya Community was opened at Kacharakanahalli. Fr Ullasappa Megalatti, the parish priest of St. Pius X Church, Kammanahalli blessed the convent and it was named as Jyothi Nilaya, 
              Sr Louise was the Superior and Sr Noella was the Headmistress. Sr. Berchmans was the member.
              <br />
              The University is driven by the vision of delivering the world –
              class value-based education and Holistic development of the
              student’s personality, enabling them to transform themselves into
              a Future Global Leaders.
            </p>
          </div>
          <div className="about-col">
            <img src={about} alt="About" />
          </div>
        </div>

        <div className="mission">
          <h1>Mission</h1>
          <p>
            --- WILL UPDATE WHEN NEEDED
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
