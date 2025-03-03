import React from 'react';
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div className="contact-us">
        <div className="row">
          {/* Google Maps Embed in a separate row */}
          <div className="contact-col">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d62233.41747348146!2d77.3964822!3d12.8698278!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae3976c15802d9%3A0x857b69916607c0e8!2sVC9Q%2BH35%2C%20Bengaluru%2C%20Karnataka%20560074!3m2!1d12.8697761!2d77.43789819999999!5e0!3m2!1sen!2sin!4v1740980330174!5m2!1sen!2sin"
              width="200%"
              height="500px" 
              style={{ border: "3" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

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
                <h5>(91)9606650740, 8951411019</h5>
                <p>Open till 6pm</p>
              </span>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <span>
                <h5>For General Enquiry: jyothinilaya12@gmail.com</h5>
              </span>
            </div>

            <div>
              <i className="fa fa-map-marker"></i>
              <span>
                <h5>View on Google Maps</h5>
                <p><a href="https://www.google.com/maps/place/Your+Location+Address" target="_blank" rel="noopener noreferrer">Opp. Pepsi Bus Stop, Mysore Road, Kumbalgodu P.O., Bangalore-560074, Karnataka India</a></p>
              </span>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="contact-col">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdIvlE4_OKi5j4w1LcVBpFPnYTQ5U5LPUpqb_DK9NGhvxca6Q/viewform?usp=header"
              width="100%"
              height="500px" 
              style={{ border: "none" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;