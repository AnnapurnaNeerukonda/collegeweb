import { FaPhone, FaEnvelope, FaWifi } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="/images/footerimage-removebg-preview.png" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <h5>Contact Information</h5>
            <p><FaPhone /> +91 9087656784, +91-44-274444000</p>
            <p><FaEnvelope /> svecwinfodesk@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h5>Video Tour</h5>
            <p><AiFillPlayCircle /> <a href="https://www.youtube.com/watch?v=vm5mThhCAwQ">Watch now</a></p>
          </div>
          <div className="col-md-3">
            <h5>Community Radio</h5>
            <p><FaWifi /> Tune in to our community radio 90.4 for the latest updates and news.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
