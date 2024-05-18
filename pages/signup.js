import React, { useState } from 'react';
import styles from '../styles/signup.module.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    dob: '',
    course: '',
    qualification: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              pattern="\d{10}"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Qualification</option>
              <option value="12th">12th</option>
              <option value="graduation">Graduation</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Course</option>
              <option value="ai">AI</option>
              <option value="cse">CSE</option>
              <option value="it">IT</option>
              <option value="ece">ECE</option>
              <option value="eee">EEE</option>
              <option value="mechanical">Mechanical</option>
              <option value="civil">Civil</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
