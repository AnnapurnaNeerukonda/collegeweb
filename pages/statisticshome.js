import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [establishedYear, setEstablishedYear] = useState(0);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [campusAcreage, setCampusAcreage] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      // Update established year
      if (establishedYear < 2000) {
        setEstablishedYear(prevYear => prevYear + 1,2000);
      }

      // Update number of students
      if (numberOfStudents < 50000) {
        setNumberOfStudents(prevStudents => Math.min(prevStudents + 200, 50000));
      }
       if (campusAcreage < 200) {
       setCampusAcreage(prevAcreage => prevAcreage + 20,200);
       }

      setTimeout(updateValues, 100); // Update every second
    };

    updateValues(); // Start updating values

    // Cleanup function to clear timeouts
    return () => clearTimeout(updateValues);
  }, [establishedYear, numberOfStudents, campusAcreage]);

  return (
    <div className='container text-center'>
      <div className='row mb-4' style={{color:"#0000ff"}}>
        <div className='col-md-4'>
          <h1>{establishedYear}</h1>
          <h5 style={{color:"#0000ff"}}>Established</h5>
        </div>
        <div className='col-md-4'>
          <h1>{numberOfStudents}+</h1>
          <h5 style={{color:"#0000ff"}}>Number of Students</h5>
        </div>
        <div className='col-md-4'>
          <h1>{campusAcreage}+ acres</h1>
          <h5 style={{color:"#0000ff"}}>Acres Green Campus</h5>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
