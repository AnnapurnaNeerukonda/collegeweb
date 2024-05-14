import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaPhone, FaEnvelope,FaWifi,FaArrowRight } from 'react-icons/fa'; 
import { AiFillPlayCircle } from 'react-icons/ai'; 
import styles from '../styles/contact.module.css'
import Link from 'next/link';
const Contact = () => {
  return (
    <div>
      <div className="text-center"style={{ width: '100%', height: '50%' ,marginBottom:"30px"}}>
        <img src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeBanner/fabd6afe-a77c-4c3e-8e87-087f37c46531.png" className="img-fluid" width={1350} height={700} alt="Contact" />
      </div>
      <div className="container-fluid" style={{backgroundColor:"#F0F8FF"}}>
      <div className="row justify-content-center align-items-center">
        <h1 className="text-center" style={{marginBottom:"30px"}}><b>How To Reach Us</b></h1>
        <center>
          <div style={{ borderBottom: '2px solid black', margin: '4px auto', width: '50%' ,marginBottom:"30px"}}>
          </div>
        </center>
          <div className="col-md-4 text-center bg-light" style={{ backgroundColor: "#F0F8FF", height:"350px" }}>
            <div style={{marginTop:"40px"}}>
            <b>Address</b>
            <h6 style={{marginBottom:"30px"}}>Vishnupur, Bhimavaram, West Godavari Dist. – 534 202, A.P., India.</h6>
            <b>Call us at</b>
            <h6 style={{marginBottom:"30px"}}><FaPhone/>+91 9087656784, +91-44- 274444000</h6>
            <b>Information Center For Admissions</b>
            <h6 style={{marginBottom:"20px"}}><FaPhone/>  +91 9034562998 | <FaEnvelope/> infodesk@svecw.edu.in</h6>
            </div>
          </div>
          <div className="col-md-4"> 
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30593.33291547152!2d81.48604911083983!3d16.568119000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1715508671415!5m2!1sen!2sin" width="100%" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="row justify-content-center text-center mt-5">
              <h3 className='mb-3'>Departments Contact Information</h3>
                      <div className="col-md-7 bg-white ">
                        <h6 className=' mb-3'>Department of AI
                       <FaPhone style={{marginLeft: '20px' }}/>+1 (123) 564-7890,<FaEnvelope style={{marginLeft: '20px' }}/>infodeskAI@gmail.com</h6>
                       <h6 className='mb-3'>Computer Science & Engineering
                       <FaPhone style={{marginLeft: '20px' }}/>+1 (123) 4
                       356-7890,<FaEnvelope style={{marginLeft: '20px' }}/>infodeskcse@gmail.com</h6>
                       <h6 className='mb-3'>Electronics Communication Engineering
                       <FaPhone style={{marginLeft: '20px' }}/>+1 (123) 436-7890,<FaEnvelope style={{marginLeft: '20px' }}/>infodeskECE@gmail.com</h6>
                       <h6 className='mb-3'>Electrical & Electronics Engineering
                       <FaPhone style={{marginLeft: '20px' }}/>+1 (123) 496-7890,
                       <FaEnvelope style={{marginLeft: '20px' }}/>infodeskEEE@gmail.com</h6>
                       <h6 className='mb-3'>Mechanical Engineering-
                       <FaPhone style={{marginLeft: '20px' }}/>+1 (123) 499-7890,<FaEnvelope style={{marginLeft: '20px' }}/>infodeskME@gmail.com</h6>
                       <h6 className='mb-3'>Civil Engineering
                       <FaPhone />+1 (123) 499-7890,<FaEnvelope style={{marginLeft: '20px' }}/>infodeskCE@gmail.com</h6>
                       </div>
                   </div>
           <h3 className="text-center m-5"><b>VISHNU ON SOCIAL MEDIA</b></h3>
          <div className="d-flex justify-content-center align-items-center mb-5">
           <a href="https://www.facebook.com/yourpage" className="mx-2"><FaFacebook /></a>
           <a href="https://www.instagram.com/yourpage" className="mx-2"><FaInstagram /></a>
           <a href="https://twitter.com/yourpage" className="mx-2"><FaTwitter /></a>
           <a href="https://www.linkedin.com/company/yourpage" className="mx-2"><FaLinkedin /></a>
           <a href="https://www.youtube.com/channel/yourpage"className="mx-2"><FaYoutube /></a>
          </div>
          <div className='bg-primary text-light'>
              <h1 className="text-center p-5">Where could journey at Vishnu<p>take you ?</p></h1>
               <div className='container text-center'>
                    <div className='row justify-content-center'>
                    <div className='col-2 p-3 '>
                        <Link href="/department">
                         <a className="text-decoration-none text-light d-flex align-items-center ">
                          <FaArrowRight /> Departments
                                </a>
                           </Link>
                       </div>
                      <div className='col-2 p-3'>
                      <Link href="/aboutUS">
                         <a className="text-decoration-none text-light d-flex align-items-center">
                         <FaArrowRight />About Us
                                </a>
                           </Link>
                       </div>
                     <div className='col-2 p-3'>
                     <Link href="/">
                         <a className="text-decoration-none text-light d-flex align-items-center">
                         <FaArrowRight />Placements
                                </a>
                           </Link>
                      </div>
                   </div>
                </div>
                </div>
           <h3 className="text-center p-5 text-primary">Enjoy your Student Life & Excel at VISHNU</h3>

  </div>

      </div>
    </div>
  );
}

export default Contact;