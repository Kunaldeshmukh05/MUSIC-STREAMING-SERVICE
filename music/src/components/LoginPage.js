import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // If login is successful, navigate to another page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  
      <div className="cont">
        <div className="Kunal">
          <h3>Login</h3>
          {error && <p className="error">{error}</p>}
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="SignUpButton" onClick={handleLogin}>
            Login
          </button>
          <br></br>
          <div className="checkbox-field">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <div>
            <span className="new-user">New User?</span>
            <span>
              <Link to="/LoginPage/SignUpPage">Signup</Link>
            </span>
          </div>
        </div>
      </div>
  
    
  );
};

export default LoginPage;
