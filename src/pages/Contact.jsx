import Breadcrumb from "../components/Breadcrumb"
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div>
        <div className="location">
          {/* Uncomment this iframe if you want to show a map */}
          {/* <iframe
            src="https://www.google.com/maps/embed..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>

        <div className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Opp. Pepsi Bus Stop, Mysore Road, Kumbalgodu P.O.</h5>
                  <p>Bangalore-560074, Karnataka India</p>
                </span>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>(91)9606650740, 9008478897</h5>
                  <p>Open till 6pm</p>
                </span>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>For General Enquiry: : umikumbalgudu@gmail.com</h5>
                </span>
              </div>
            </div>

            <div className="contact-col">
              {/* Add Contact Form Component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
