import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from '../pages/slider';
import Link from 'next/link';
const Home = () => {
  const [establishedYear, setEstablishedYear] = useState(0);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [campusAcreage, setCampusAcreage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (isVisible) {
      intervalId = setInterval(() => {
        if (establishedYear < 2000) {
          setEstablishedYear(prevYear => prevYear + 100);
        }
        if (numberOfStudents < 50000) {
          setNumberOfStudents(prevStudents => Math.min(prevStudents + 2000, 50000));
        }
        if (campusAcreage < 200) {
          setCampusAcreage(prevAcreage => prevAcreage + 10);
        }
      }, 100);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isVisible, establishedYear, numberOfStudents, campusAcreage]);

  return (
    <div>
      <Slider/>
      <div className={styles.imagecontainer}>
        <div ref={countRef} className={`${styles.smallscreen} text-center`} >
        <h3 className='text-center'>Vishnu Educational Society- One of India&apos;s <p className='mt-3 mb-5'>-Best Ranked Universities</p> </h3>
          <img src="https://svecw.edu.in/wp-content/uploads/2024/03/home-slider-2.webp" alt="Image description" className={styles.image} />
          <div className={styles.text}>Top Quality And Learning Experience</div>
        </div>
      </div>
      <div className='container text-center'>
        <div className='row mb-4' style={{ color: "#0000ff" }}>
          <div className='col-md-4'>
            <h1 >{establishedYear}</h1>
            <h5 style={{ color: "#0000ff" }}>Established </h5>
          </div>
          <div className='col-md-4'>
            <h1 >{numberOfStudents}+</h1>
            <h5 style={{ color: "#0000ff" }}>Number of Students</h5>
          </div>
          <div className='col-md-4'>
            <h1 >{campusAcreage}+ acres</h1>
            <h5 style={{ color: "#0000ff" }}>Acres Green Campus</h5>
          </div>
        </div>
        <Link href="/aboutUS">
      <a className="btn btn-primary">
        Explore More <FaArrowRight className="ml-1" />
      </a>
    </Link>
      </div>
    </div>
  );
};

export default Home;
