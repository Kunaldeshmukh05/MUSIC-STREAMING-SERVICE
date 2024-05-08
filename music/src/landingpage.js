import React, { useState } from 'react';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import SignUpPage from './components/SignUpPage'; // Import the SignUpPage component
import './landingpages.css';

const Landingpage = () => {
  const [showLoginPage, setShowLoginPage] = useState(false); // State variable to toggle visibility of login page
  const [showSignUpPage, setShowSignUpPage] = useState(false); // State variable to toggle visibility of sign up page

  return (
    <>
      <div className='Lmain'>
        <div className='Lsub1'>
          <div className='wel'><p>Welcome to the</p></div>
          <p className='animated-text'>MUSIC STREAMING SERVICE</p>
          <br></br>
          <p className='text'>Unleash a world of endless music possibilities at your fingertips.</p>
          <br></br>
          {showLoginPage && <LoginPage />} {/* Conditionally render LoginPage */}
          {showSignUpPage && <SignUpPage />} {/* Conditionally render SignUpPage */}
          <div>
            <button className='sign' onClick={() => setShowLoginPage(true)}>SignUp</button> {/* Button to toggle visibility of login page */}
          </div>
        </div>
    
        <div className='Lsub2'>
          <div className='sub-1'>
            <div className="sub-a"></div>
            <div className="sub-b"></div>
          </div>
          <div className='sub-2'>
            <div className='sub-3'></div>
            <div className='sub-4'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage;
