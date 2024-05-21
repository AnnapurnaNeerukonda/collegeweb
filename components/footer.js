import { FaPhone, FaEnvelope, FaWifi } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mt-5 bg-gray-200">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex justify-center items-center">
            <img src="/images/footerimage-removebg-preview.png" alt="Logo" className="w-32 md:w-auto" />
          </div>
          <div className="text-center">
            <h5 className="text-lg font-semibold">Contact Information</h5>
            <p><FaPhone className="inline" /> +91 9087656784, +91-44-274444000</p>
            <p><FaEnvelope className="inline" /> svecwinfodesk@gmail.com</p>
          </div>
          <div className="text-center">
            <h5 className="text-lg font-semibold">Video Tour</h5>
            <p><AiFillPlayCircle className="inline" /> <a href="https://www.youtube.com/watch?v=vm5mThhCAwQ" target="_blank" rel="noopener noreferrer">Watch now</a></p>
          </div>
          <div className="text-center">
            <h5 className="text-lg font-semibold">Community Radio</h5>
            <p><FaWifi className="inline" /> Tune in to our community radio 90.4 fm for the latest updates and news.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
