import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [loginType, setLoginType] = useState("login");
  const [useCredentials, setUseCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCredentials = (e) => {
    setUseCredentials({ ...useCredentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setLoginType('login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('accessToken', userCredential.user.accessToken);
        navigate('/employee');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordReset = () => {
    const email = prompt("Please fill in with your Email");
    sendPasswordResetEmail(auth, email)
    alert("Reset Email sent");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="w-75 sm:w-50 max-w-md bg-white p-4 rounded shadow">
        <section>
          <div className="d-flex justify-content-center">
            <img src={logo} alt="logo" className="h-10 mb-4" />
          </div>
          <p className="text-center mb-4">
            Login or create an account to continue
          </p>
          <div className="d-flex justify-content-center mb-4">
            <Button
              variant={loginType === "login" ? "primary" : "secondary"}
              onClick={() => setLoginType("login")}
              className="mx-1"
            >
              Login
            </Button>
            <Button
              variant={loginType === "signup" ? "primary" : "secondary"}
              onClick={() => setLoginType("signup")}
              className="mx-1"
            >
              Signup
            </Button>
          </div>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={(e) => handleCredentials(e)}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => handleCredentials(e)}
                placeholder="Enter your password"
              />
            </Form.Group>
            {loginType === "login" ? (
              <Button
                onClick={(e) => handleLogin(e)}
                className="btn-block"
                variant="primary"
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={(e) => handleSignUp(e)}
                className="btn-block"
                variant="primary"
              >
                Sign Up
              </Button>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            <p onClick={handlePasswordReset} className="forgot-password text-center text-sm text-green cursor-pointer">
              Forgot Password?
            </p>
          </Form>
        </section>
      </div>
    </Container>
  );
};

export default LoginPage;
