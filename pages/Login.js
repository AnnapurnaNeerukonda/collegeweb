// pages/login.js

import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LoginModal.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const LoginModal = (props) => {
  const { show, onHide } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    specialCharacter: false,
    minLength: false,
  });

  const router = useRouter();

  const handleClose = () => {
    onHide();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const usernameRegex = /^(?![_\W])(?!.*[_\W]$)[\w\W]{8,}$/;
    if (!usernameRegex.test(username)) {
      setUsernameError('Username must be at least 8 characters and cannot start or end with a special character');
      return;
    }
    setUsernameError('');
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must meet the following requirements:');
      setPasswordRequirements({
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialCharacter: /[!@#$%^&*]/.test(password),
        minLength: password.length >= 6,
      });
      return;
    }
    setPasswordError('');

    console.log('Logging in with:', { username, password });

    router.push('/fakedata'); 
    setUsername('');
    setPassword('');
    handleClose();
  };

  const handlePasswordChange = (e) => {
    const updatedPassword = e.target.value;
    setPassword(updatedPassword);
    setPasswordRequirements({
      uppercase: /[A-Z]/.test(updatedPassword),
      lowercase: /[a-z]/.test(updatedPassword),
      number: /\d/.test(updatedPassword),
      specialCharacter: /[!@#$%^&*]/.test(updatedPassword),
      minLength: updatedPassword.length >= 6,
    });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {usernameError && <Alert variant="danger">{usernameError}</Alert>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <ul className={styles.requirementsList}>
              <li>
                <span className={passwordRequirements.uppercase ? styles.valid : ''}>
                  <AiFillCheckCircle />
                </span>
                One uppercase letter is mandatory
              </li>
              <li>
                <span className={passwordRequirements.lowercase ? styles.valid : ''}>
                  <AiFillCheckCircle />
                </span>
                One lowercase letter is mandatory
              </li>
              <li>
                <span className={passwordRequirements.number ? styles.valid : ''}>
                  <AiFillCheckCircle />
                </span>
                One number is mandatory
              </li>
              <li>
                <span className={passwordRequirements.specialCharacter ? styles.valid : ''}>
                  <AiFillCheckCircle />
                </span>
                One special character is mandatory
              </li>
              <li>
                <span className={passwordRequirements.minLength ? styles.valid : ''}>
                  <AiFillCheckCircle />
                </span>
                Minimum length of 6 characters is mandatory
              </li>
            </ul>
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
