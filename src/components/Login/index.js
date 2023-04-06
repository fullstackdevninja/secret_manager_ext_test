import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/auth";
import Loading from "../Loading";
import "./Login.css";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
      setIsLoading(true);
      const token = await login(email, password);
      // setting token in localstorage
      if (token) {
        await new Promise((resolve) => {
          chrome.storage.local.set({ token }, () => {
            console.log("Token saved");
            resolve();
          });
        });
        navigate("/popup.html");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) {
      return console.log("Wait for the loading to finish");
    }
    if (isLogin) {
      // code to handle login with email and password
      handleLogin();
    } else {
      // code to handle signup with email and password
    }
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="LoginForm">
      <h1 className="LoginForm__heading">AI Coverletter</h1>
      <form onSubmit={handleSubmit}>
        <label className="LoginForm__label">
          Email:
          <input
            type="email"
            value={email}
            name="username"
            onChange={(e) => setEmail(e.target.value)}
            className="LoginForm__input"
          />
        </label>
        <label className="LoginForm__label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="LoginForm__input"
          />
        </label>
        {!isLogin && (
          <label className="LoginForm__label">
            Confirm Password:
            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="LoginForm__input"
            />
          </label>
        )}

        <>
          {isLoading ? (
            <Loading isLoading={isLoading} />
          ) : (
            <button type="submit" className="LoginForm__button">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          )}
        </>

        <div className="LoginForm__switch">
          {error && <p className="LoginForm__error"> {error} </p>}

          {isLogin ? (
            <p>
              Don't have an account? <a onClick={switchForm}>Sign up</a>
            </p>
          ) : (
            <p>
              Already have an account? <a onClick={switchForm}>Log in</a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
