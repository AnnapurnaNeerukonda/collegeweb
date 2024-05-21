import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaWifi, FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-center">
        <img src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeBanner/fabd6afe-a77c-4c3e-8e87-087f37c46531.png" className="w-full h-auto" alt="Contact" />
      </div>
      <div className="container mx-auto bg-blue-50 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">How To Reach Us</h1>
          <div className="border-b-2 border-black w-1/2 mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8">
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="mb-4">Vishnupur, Bhimavaram, West Godavari Dist. – 534 202, A.P., India.</p>
            <h3 className="font-semibold mb-4">Call us at</h3>
            <p className="mb-4"><FaPhone className="inline-block mr-2" /> +91 9087656784, +91-44- 274444000</p>
            <h3 className="font-semibold mb-4">Information Center For Admissions</h3>
            <p className="mb-4"><FaPhone className="inline-block mr-2" /> +91 9034562998 | <FaEnvelope className="inline-block mr-2" /> infodesk@svecw.edu.in</p>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30593.33291547152!2d81.48604911083983!3d16.568119000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1715508671415!5m2!1sen!2sin" width="100%" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Departments Contact Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Department of AI</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 564-7890</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskAI@gmail.com</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Computer Science & Engineering</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 435-6789</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskcse@gmail.com</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Electronics Communication Engineering</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 436-7890</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskECE@gmail.com</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Electrical & Electronics Engineering</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 496-7890</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskEEE@gmail.com</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Mechanical Engineering</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 499-7890</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskME@gmail.com</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold mb-2">Civil Engineering</h3>
            <p><FaPhone className="inline-block mr-2" /> +1 (123) 499-7890</p>
            <p><FaEnvelope className="inline-block mr-2" /> infodeskCE@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Where could journey at Vishnu take you?</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
      <Link href="/department" passHref>
          <div className="text-lg font-semibold text-white flex items-center justify-center py-3 px-6 bg-blue-500 rounded-full cursor-pointer">
            <FaArrowRight className="mr-2" />Departments
          </div>
        </Link>
      </div>
      <div>
        <Link href="/aboutUS" passHref>
          <div className="text-lg font-semibold text-white flex items-center justify-center py-3 px-6 bg-blue-500 rounded-full cursor-pointer">
            <FaArrowRight className="mr-2" />About Us
          </div>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <div className="text-lg font-semibold text-white flex items-center justify-center py-3 px-6 bg-blue-500 rounded-full cursor-pointer">
            <FaArrowRight className="mr-2" />Placements
          </div>
        </Link>
    </div>
          </div>
        </div>
      </div>
      <h3 className="text-center py-12 text-primary">Enjoy your Student Life & Excel at VISHNU</h3>
    </div>
  );
}

export default Contact;
