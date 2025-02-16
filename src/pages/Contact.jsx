import React from 'react';
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
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