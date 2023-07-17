import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// // import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Medical from '../assets/images/medical.png';
// import LogoMobile from '../assets/images/logo-mobile.png';
// import User from '../assets/images/user.png';
// import Eye from '../assets/images/eye.png';
// import EyeShow from '../assets/images/eye-show.png';
// import LoginBg from '../assets/images/login-bg.png';
// import { loginUser } from '../service/api';

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const history = useHistory();

  const handleLogin = () => {
    const user = { email, password };

    // loginUser(user)
    //   .then((response) => {
    //     const { data } = response;
    //     const { token, refreshToken } = data;
    //     // Store the tokens in local storage
    //     localStorage.setItem('accessToken', token);
    //     localStorage.setItem('refreshToken', refreshToken);
    //     // Display success toast message
    //     toast.success('Successfully logged in!', { autoClose: 2000 });

    //     // Redirect to the next page after a short delay
    //     setTimeout(() => {
    //       history.push('/dashboard');
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     const { response } = error;
    //     if (response && response.data && response.data.message) {
    //       toast.error(response.data.message);
    //     } else {
    //       // Display default error message
    //       toast.error('Unauthorized person');
    //     }
    //   });
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      <Container className="justify-content-center">
        
        
        <div className="login-body">
          <h4 className="login-title">Welcome</h4>
          <p className="login-subtitle">Sign in to your account to continue</p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <div className="form-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          
          <button className="login-button" onClick={handleLogin}>Login</button>
          
        </div>
       
      </Container>
      {/* <ToastContainer /> */}
    </>
  );
}

export default Home;
