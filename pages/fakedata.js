import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/fakedata.module.css'
const Fakedata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        const firstNineUsers = response.data.users.slice(0, 15);
        setUsers(firstNineUsers);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center text-primary">Dashboard</h1>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className={`${user.card}card shadow-lg`}>
              <div className="card-body">
                <h5 className="card-title text-primary">{user.firstName} ({user.username})</h5>
                <p className="card-text">Age: {user.age}</p>
                <p className="card-text">Gender: {user.gender}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">State: {user.address.state}</p>
                <p className="card-text">Birthdate: {new Date(user.birthDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakedata;
