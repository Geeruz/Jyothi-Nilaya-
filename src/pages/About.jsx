import Breadcrumb from "../components/Breadcrumb";
import about from "../assets/images/about.jpg";
import applicationForm from "../assets/images/Applicationform.pdf";
import aboutFac from "../assets/images/gallery5.jpg";
import aboutFac2 from "../assets/images/gallery8.jpg";
import aboutFac3 from "../assets/images/gallery10.jpg";
import aboutFac4 from "../assets/images/guidlines.jpg";
import aboutTransport from "../assets/images/bus.jpg";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        {/* Download Application Form Section */}
        <div className="row">
          <div className="about-col">
            <a href={applicationForm} download className="download-button">
              Click here to download application form
            </a>
          </div>
        </div>

        {/* Existing Content */}
        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h1>Jyothi Nilaya</h1>
            <p>
              <b style={{ fontSize: '20px' }}>
                Jyothi Nilaya Study House
              </b>
              <p style={{ fontSize: '20px' }}>
              Jyothi Nilaya study house is a home away from home with well furnished rooms and well equipped Study hall.
              </p>
              <p style={{ fontSize: '20px' }}>
              It is a safe, secure and has all the facilities that a student needs. Committed to zero ragging and zero tolerance to alcohol, smoking and drugs.The study house is located in a serene and peaceful environment.
              </p>
            </p>
          </div>
          <div className="about-col">
            <img src={about} alt="About" />
          </div>
        </div>


        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h1>Facilities Available</h1>
            <ul>
              <li>Chapel</li>
              <li>Hot water (24x7)</li>
              <li>Safe R.O water</li>
              <li>Sports Facilities</li>
              <li>Wifi (24x7)</li>
              <li>Laundry</li>
              <li>Fridge</li>
              <li>Study Hall</li>
              <li>Dining Hall</li>
            </ul>
          </div>
          <div className="about-col">
            <img src={aboutFac} alt="Aboutfac" />
          </div>
        </div>
        {/* Accommodation Charges Table */}
        <div className="row">
          <div className="about-col">
            <h1>ACCOMMODATION CHARGES</h1>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Ten Months JUNE - MARCH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S.No</td>
                  <td>Rooms</td>
                  <td>Fee per Month</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Single Room (Toilet Attached)</td>
                  <td>Rs. 8000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Single Room (Toilet Not Attached)</td>
                  <td>Rs. 6000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Double Room (Toilet Attached)</td>
                  <td>Rs. 5000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Double Room (Toilet Not Attached)</td>
                  <td>Rs. 4000</td>
                </tr>
              
                <tr>
                  <td>5</td>
                  <td>Food - Breakfast & Dinner (Lunch on Sundays)</td>
                  <td>Rs. 4550</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Refundable Security Fund (Caution Deposit)</td>
                  <td>Rs. 10000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="about-col">
            <img src={aboutFac2} alt="Aboutfac2" />
          </div>
        </div>
        {/* Transportation */}
        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h2>Transportation</h2>
            <ul>
              <li>All students can board the college bus, BMTC, or an auto-rickshaw.</li>
              <li>College buses fetch students from different parts of the city as early as 8:20 AM.</li>
              <li>BMTC buses stop opposite the hostel or can be boarded from the nearest bus stop, i.e., Pepsi Gate.</li>
              <li>Auto-rickshaws are available inside hostel.</li>
            </ul>
          </div>
          <div className="about-col">
            <img src={aboutTransport} alt="Transportation" />
          </div>
        </div>

        {/* Food */}
        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h2>Food</h2>
            <ul>
              <li>Breakfast and dinner are provided to the students.</li>
              <li>On Sundays, breakfast, lunch, and dinner are provided.</li>
              <li>Vegetarian and non-vegetarian food is available.</li>
              <li>A common refrigerator is available for students' use.</li>
              <li>Breakfast timings: 7:30am to 8:30 am.</li>
              <li>Dinner timings: 7:30pm to 8:30 pm.</li>
              <li>Students are not allowed to take food to their rooms.</li>
            </ul>
          </div>
          <div className="about-col">
            <img src={aboutFac3} alt="Food" />
          </div>
        </div>
        {/* guidelines */}
        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h2>Guidelines</h2>
            <ul>
              <li>During weekends, if student wishes to go home they should take the permission from the warden as well as a written request from their parents.</li>
              <li>No students will be permitted to stay over night at their friends' house.</li>
              <li>If the student leaves the hostel before completing the period of one year, the fees and the deposit amount will not be refunded.</li>
              <li>If any student is found misbehaving, she will be expelled from the hostel and the fees adn the caution deposit will not be refunded.</li>
              <li>Students are expected to keep their rooms neat and tidy.</li>
              <li>Students can use the facilites of playing indoor games.</li>
              <li>Caution deposit will be refunded after deducting Rs.500/.</li>
            </ul>
          </div>
          <div className="about-col">
            <img src={aboutFac4} alt="Food" />
          </div>
        </div>

        {/* Others */}
        <div className="row">
          <div className="about-col" style={{ fontSize: '22px' }}>
            <h2>Others</h2>
            <ul>
              <li>Wi-Fi is provided to all students throughout the year.</li>
              <li>All electronic gadgets except laptops, phones, and iron box are strictly prohibited.</li>
              <li>Students are required to give their attendance via the biometric machine.</li>
              <li>Students are required to be in the hostel on or before 7:30 PM.</li>
              <li>Laundry facilities and washing machines are available for those who need it.</li>
              <li>Security cameras are installed throughout the premises.</li>
            </ul>
          </div>
          <div className="about-col " style={{ fontSize: '22px' }}>
            <h2>Things to be brought</h2>
            <ul>
              <li>Mattress (size: 3/6)</li>
              <li>Pillow</li>
              <li>Plates, Glass/Cup</li>
              <li>Lock for the cupboard</li>
              <li>Bucket/Mug</li>
              <li>Iron Box</li>
            </ul>
          </div>
        </div>
          
        

        
      </div>
    </div>
  );
};


export default AboutUs;