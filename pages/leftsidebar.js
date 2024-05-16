import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/leftnavbar.module.css';

const LeftSidebar = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className={`${styles.parentleftnavbar} container-fluid`}>
      <div className={`${styles.sidenav} row`}>
        <div className={`${styles.nav} col-2 pt-4`}>
          <ul>
            <li type='none' className='mb-4'>
              <Link href="#">
                <a onClick={() => handleClick('Hyderabad')} className={styles.link}>
                  Hyderabad
                </a>
              </Link>
            </li>
            <li type='none'>
              <Link href="#">
                <a onClick={() => handleClick('Bhimavaram')} className={styles.link}>
                  Bhimavaram
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='col-md-10 text-light text-center' style={{ backgroundColor: selectedCity === "Hyderabad" ? "rgb(110, 110, 244)" : selectedCity === "Bhimavaram" ? "rgb(114, 186, 114)" : "inherit" }}>
          {console.log(selectedCity)}
          {selectedCity && <h4 style={{ color: "black" }}>{selectedCity}</h4>}
          <div className="container mt-3">
            <h5 className='mt-5 mb-5 text-center text-primary'>Building a world-class education system, one student at a time.</h5>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <img src="/images/chairman.webp" className="card-img-top" alt="Image 1" style={{ height: '200px' }} />
                  <div className="card-body">
                    <p className="card-text text-primary">Chairman <span>Sri K.V Vishnu Raju </span></p>

                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <img src="/images/secretary-aditya.webp" className="card-img-top" alt="Image 2" style={{ height: '200px' }} />
                  <div className="card-body">
                    <p className="card-text text-primary">Secretary <span> Sri K Aditya Vissam</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <img src="/images/JointSecretary.webp" className="card-img-top" alt="Image 3" style={{ height: '200px' }} />
                  <div className="card-body">
                    <p className="card-text text-primary">Joint Secretary<span> Sri K Summant</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <img src="/images/vice-chairman.webp" className="card-img-top" alt="Image 4" style={{ height: '200px' }} />
                  <div className="card-body">
                    <p className="card-text text-primary">Vice Chairman <span> Sri R Rajagopal</span></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
