import { useState, useEffect } from 'react';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://piltovrbackend-2.onrender.com/api/users')
      .then(response => response.json())
      .then(data => { setStudents(data); console.log(data) })

      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container">
      
        <h1 className='text-center mb-5 mt-5'>Student details</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {students.map(student => {
          console.log("Date of Birth:", student.dob);
          return (
            <div className="col mb-3" key={student.id}>
              <div className="card" style={{ boxShadow: "0px 2px 8px rgb(101, 208, 212)" }}>
                <h3>{student.name}</h3>
                <p>Email: {student.email}</p>
                <p>Phone: {student.phonenumber}</p>
                <p>State: {student.state}</p>
                <p>Date of Birth: {new Date(student.dateofbirth).toLocaleDateString()}</p>
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
