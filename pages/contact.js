import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaPhone, FaEnvelope,FaWifi } from 'react-icons/fa'; 
import { AiFillPlayCircle } from 'react-icons/ai'; 
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '50%' ,marginBottom:"30px"}}>
       <h1 className={styles.text} >Contact Us</h1> 
        <img src="https://www.yuvamind.com/colleges/images/college/shri-vishnu-engineering-college-bhimavaram-campus.png" class="img-fluid" style={{ width: '100%', height: '25%' ,backgroundColor:"#ADD8E6" }} alt="Contact" />
      </div>
      <div className="container-fluid" style={{backgroundColor:"#ADD8E6"}}>
      <div className="row justify-content-center align-items-center">
        <h1 className="text-center" style={{marginBottom:"30px"}}><b>How To Reach Us</b></h1>
        <center>
          <div style={{ borderBottom: '2px solid black', margin: '4px auto', width: '50%' ,marginBottom:"30px"}}>
          </div>
        </center>
          <div className="col-md-4 text-center " style={{ backgroundColor: "white", width:"500px", height:"350px" }}>
            <div style={{marginTop:"40px"}}>
            <b>Address</b>
            <h6 style={{marginBottom:"30px"}}>Vishnupur, Bhimavaram, West Godavari Dist. – 534 202, A.P., India.</h6>
            <b>Call us at</b>
            <h6 style={{marginBottom:"30px"}}>+91 9087656784, +91-44- 274444000</h6>
            <b>Information Center For Admissions</b>
            <h6 style={{marginBottom:"20px"}}>Mobile: +91 9034562998 | Email: infodesk@svecw.edu.in</h6>
            </div>
          </div>
          <div className="col-md-4"> 
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30593.33291547152!2d81.48604911083983!3d16.568119000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1715508671415!5m2!1sen!2sin" width="500" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
           <h3 className="text-center m-5"><b>VISHNU ON SOCIAL MEDIA</b></h3>
          <div className="d-flex justify-content-center align-items-center mb-5">
           <a href="https://www.facebook.com/yourpage" className="mx-2"><FaFacebook /></a>
           <a href="https://www.instagram.com/yourpage" className="mx-2"><FaInstagram /></a>
           <a href="https://twitter.com/yourpage" className="mx-2"><FaTwitter /></a>
           <a href="https://www.linkedin.com/company/yourpage" className="mx-2"><FaLinkedin /></a>
           <a href="https://www.youtube.com/channel/yourpage"className="mx-2"><FaYoutube /></a>
          </div>
      </div>
    </div>
      

    </div>
  );
}

export default Contact;