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
      navigate("/HomePage"); // If login is successful, navigate to another page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3 className="login-title">Login</h3>
        {error && <p className="login-error">{error}</p>}
        <div className="login-input-field">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-field">
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <br></br>
        <div className="login-checkbox-field">
          <input type="checkbox" id="login-remember-me" />
          <label htmlFor="login-remember-me">Remember me</label>
        </div>

        <div>
          <span className="login-new-user">New User?</span>
          <span>
            <Link to="/LoginPage/SignUpPage">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
