// components/Student.js

import { useState, useEffect } from 'react';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://piltovrbackend-2.onrender.com/api/users')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className='text-center '>Student details</h1>
        {students.map(student => {
  console.log("Date of Birth:", student.dob); // Print out the date of birth
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-3" key={student.id}>
      <div className="card">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>Phone: {student.phone}</p>
        <p>State: {student.state}</p>
        <p>Date of Birth: {new Date(student.dob).toLocaleDateString()}</p>
        <p>Qualification: {student.qualification}</p>
        <p>Course: {student.course}</p>
      </div>
    </div>
  );
})}

      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Student;
