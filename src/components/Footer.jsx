import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="foot-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;