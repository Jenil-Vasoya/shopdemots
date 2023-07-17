import { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap';

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  
  const handleLogin = () => {
    const user = { email, password };
    console.log(user);

    axios.post(`https://localhost:7010/User/user-login?email=${email}&password=${password}`).then(response => {
            console.log(response)
            localStorage.setItem('Token', response.data);
        }).catch(error =>{
            console.log(error)
        })
    // Handle login functionality here
  };

  useEffect(() => {
    localStorage.setItem('email', email);
  })

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        <h4 className="login-title">Welcome</h4>
        <p className="login-subtitle">Sign in to your account to continue</p>
        <Form>
          <Form.Group controlId="formEmail">Email : 
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formPassword">
            Password : 
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`password-toggle ${showPassword ? 'active' : ''}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </Form.Group>
          <br></br>
          <Button variant="primary" className="login-button " onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Home;
