import React, { useState } from 'react';
import Slider from './slider';
import styles from '../styles/department.module.css';
const Department = () => {
  return (
    <>
    <div className={`${styles.container} container-fluid`}>
      <h2 className="text-center mt-3 mb-5">Departments</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
      <div className="col mb-4 ">
          <div className={`${styles.card} card`}>
            <img src="/images/department1.jpg" className="card-img-top" alt="Department 2" />
            <div  className={`${styles.cardtext} card-text`}>Computer Science & Engineering</div>
          </div>
      </div>

        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department2.png" className="card-img-top" alt="Department 2" />
            <div className={`${styles.cardtext} card-text`}>Information Technology</div>
          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department3.webp" className="card-img-top" alt="Department 3" />
            <div className={`${styles.cardtext} card-text`}>Aritificial Intelligence</div>
          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department4.jpeg" className="card-img-top" alt="Department 4" />
            <div className={`${styles.cardtext} card-text`}>Cyber Security</div>

          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department5.jpg" className="card-img-top" alt="Department 5" />
            <div className={`${styles.cardtext} card-text`}>Electronics & Communication Engineering</div>

          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department6.webp" className="card-img-top" alt="Department 6" />
            <div className={`${styles.cardtext} card-text`}>Electrical & Electronic Engineering.</div>

          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department7.jpg" className="card-img-top" alt="Department 7" />
            <div className={`${styles.cardtext} card-text`}>Civil Engineering</div>
          </div>
        </div>
        <div className="col mb-4">
          <div className={`${styles.card} card`}>
            <img src="/images/department8.jpg" className="card-img-top" alt="Department 8" />
            <div className={`${styles.cardtext} card-text`}>Mechanical Engineering</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Department;
