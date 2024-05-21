import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectItem } from '@/components/ui/select';
import styles from '../styles/signup.module.css';
import { Cross2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Swal from 'sweetalert2'; 

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDob = new Date(formData.dob).toISOString();

    const body = {
      name: formData.name,
      email: formData.email,
      phonenumber: formData.phone,
      state: formData.state,
      dateofbirth: formattedDob,
      qualification: formData.qualification,
      course: formData.course,
    };

    try {
      const response = await fetch('https://piltovrbackend-2.onrender.com/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        Swal.fire('Success', 'Thank you for registering', 'success');
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          state: '',
          dob: '',
          course: '',
          qualification: '',
        });
        setError(null);
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        setError('Form submission failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error: ' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/">
          <Cross2Icon className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer" />
        </Link>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <Select value={formData.qualification} onValueChange={(value) => handleSelectChange('qualification', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="12th">12th</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className={styles.inputGroup}>
            <Select value={formData.course} onValueChange={(value) => handleSelectChange('course', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ai">AI</SelectItem>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="ece">ECE</SelectItem>
                  <SelectItem value="eee">EEE</SelectItem>
                  <SelectItem value="mechanical">Mechanical</SelectItem>
                  <SelectItem value="civil">Civil</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <Button type="submit" className={styles.submitButton}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
