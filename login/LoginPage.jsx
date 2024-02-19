import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import FullPageLoader from '../components/FullPageLoader';
import { auth } from '../firebase/config.js'
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
}  from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials,setUserCredential]=useState({});
  const [error,setError]=useState("");
  const navigate = useNavigate();



  function handleCredentials(e){
    setUserCredential({...userCredentials,[e.target.name]:e.target.value});
  }

  function handleSignup(e){
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(auth,userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    const user = userCredential.user;

  })
  .catch((error) => {
    setError(error.message);
    
  });
  }

  function handleLogin(e){
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
  })
  .catch((error) => {
    setError(error.message);
  });
  }

  function handlePasswordReset(){
    const email=prompt('Please type in your Email');
    sendPasswordResetEmail(auth,email);
    alert('Email sent! Check your inbox for further instructions');
  }



  return (
    <>
      {isLoading && <FullPageLoader />}
      <Container className="login-page">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6}>
            <h1>Welcome BudgetBuddy</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <Button
                variant={loginType === 'login' ? 'primary' : 'secondary'}
                onClick={(e) => {handleLogin(e)}}>
                Login
              </Button>
              <Button
                variant={loginType === 'signup' ? 'primary' : 'secondary'}
                onClick={(e) => {handleSignup(e)}}>
                Signup
              </Button>
            </div>
            <Form className="add-form login">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control onChange={(e)=>{handleCredentials(e)}}type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control onChange={(e)=>{handleCredentials(e)}} type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-block">
                {loginType === 'login' ? 'Login' : 'Sign Up'}
                
              </Button>
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
              <p onClick={handlePasswordReset} className="forgot-password">Forgot Password?</p>
            </Form>

              
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
