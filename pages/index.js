import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { Card, CardContent, CardDescription} from "@/components/ui/card";
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
      <div className={styles.videocontainer}>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src="/images/svecwvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={`${styles.imagecontainer} mb-5`}>
        <div className={`${styles.smallscreen} text-center mb-5`} >
          <h3 className='text-center'>Vishnu Educational Society- One of India&apos;s <p className='mt-3 mb-5'>-Best Ranked Universities</p> </h3>
          <img src="https://svecw.edu.in/wp-content/uploads/2024/03/home-slider-2.webp" alt="Image description" className={styles.image} />
          <div className={`${styles.text} mb-5 `}>Top Quality And Learning Experience</div>
        </div>
      </div>
      <div className='container text-center' style={{ marginTop: "90px" }}>
        <div ref={countRef} className='row mb-4' style={{ color: "#0000ff" }}>
          <div className='col-md-4'>
            <h1>{establishedYear}</h1>
            <h5 style={{ color: "#0000ff" }}>Established </h5>
          </div>
          <div className='col-md-4'>
            <h1>{numberOfStudents}+</h1>
            <h5 style={{ color: "#0000ff" }}>Number of Students</h5>
          </div>
          <div className='col-md-4'>
            <h1>{campusAcreage}+ acres</h1>
            <h5 style={{ color: "#0000ff" }}>Acres Green Campus</h5>
          </div>
        </div>
        <Link href="/aboutUS" passHref>
        <div className="btn btn-primary cursor-pointer">
          Explore More
        </div>
      </Link>
      </div>
      <div className="container mt-3">
        <h5 className="mt-5 mb-5 text-center">Accreditations & Awards</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card>
            <CardContent>
              <img src="/images/academicresearch.jpg" className="card-img-top" alt="Image 1" style={{ height: '200px' }} />
              <CardDescription>Ranked in MHRD – NIRF Engineering College Ranking in India</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src="/images/research2.jpg" className="card-img-top" alt="Image 2" style={{ height: '200px' }} />
              <CardDescription>Listed as Best Engineering College by India Today Magazine</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src="/images/research3.jpg" className="card-img-top" alt="Image 3" style={{ height: '200px' }} />
              <CardDescription>Listed as Best Engineering College in THE WEEK – Hansa Research Survey</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src="/images/research4.jpg" className="card-img-top" alt="Image 4" style={{ height: '200px' }} />
              <CardDescription>Ranked in Atal Ranking of Institutions on Innovation Achievements (ARIIA).</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );

};
export default Home;