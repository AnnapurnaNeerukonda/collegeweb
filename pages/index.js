import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [establishedYear, setEstablishedYear] = useState(0);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [campusAcreage, setCampusAcreage] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add logic here if you want to trigger some effect based on visibility
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (establishedYear < 2000) {
        setEstablishedYear(prevYear => Math.min(prevYear + 100, 2000)); // Limit to 2000
      }
      if (numberOfStudents < 50000) {
        setNumberOfStudents(prevStudents => Math.min(prevStudents + 1500, 50000)); // Limit to 50000
      }
      if (campusAcreage < 200) {
        setCampusAcreage(prevAcreage => Math.min(prevAcreage + 5, 200)); // Limit to 200
      }
    }, 50); // Decreased interval

    return () => clearInterval(interval);
  }, []);

  const activate = (e) => {
    const slider = document.querySelector(`.${styles.slider}`);
    const items = document.querySelectorAll(`.${styles.item}`);
  
    if (items.length === 0) return; 
    
    if (e.target.classList.contains(styles.next) && items[0] !== slider) {
      slider.append(items[0]);
    } else if (e.target.classList.contains(styles.prev) && items[items.length - 1] !== slider) {
      slider.prepend(items[items.length - 1]);
    }
  };

  return (
    <div ref={carouselRef}>
      <div className={styles.carouselContainer}>
        <main className={styles.main}>
          <ul className={styles.slider}>
          <li className={`${styles.item} ${styles.thirdItem}`} style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
              <div className={styles.content}>
                <h2 className={styles.title}>"Lossless Youths"</h2>
                <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className={`${styles.item} ${styles.thirdItem}`} style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
              <div className={styles.content}>
                <h2 className={styles.title}>"Lossless Youths"</h2>
                <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            {/* Your list items */}
          </ul>
          <nav className={styles.nav}>
            <FaArrowLeft className={`${styles.btn} ${styles.prev}`} onClick={activate} />
            <FaArrowRight className={`${styles.btn} ${styles.next}`} onClick={activate} />
          </nav>
        </main>
      </div>
      <div className={styles.imagecontainer}>
        <div className='text-center mb-5'>
        <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/02/tree.jpg" alt="Image description" className={styles.image} />
                <div class={styles.text}  >Top Quality And Learning Experience</div>
        </div>
      </div>
      <div className='container text-center'>
        <div className='row mb-4' style={{color:"#0000ff"}}>
          <div className='col-md-4'>
            <h1 >{establishedYear}</h1>
            <h5 style={{color:"#0000ff"}}>Established </h5>
          </div>
          <div className='col-md-4'>
            <h1 >{numberOfStudents}+</h1> 
            <h5 style={{color:"#0000ff"}}>Number of Students</h5>
          </div>
          <div className='col-md-4'>
            <h1 >{campusAcreage}+ acres</h1>
            <h5 style={{color:"#0000ff"}}>Acres Green Campus</h5> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
