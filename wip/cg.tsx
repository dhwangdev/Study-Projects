import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleGoogleLogin = () => {
    console.log("Google Login");
  };
  const handleKakaoLogin = () => {
    console.log("Kakao Login");
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();  
    if (!trimmedEmail || !trimmedPassword) {
      setError("Please enter your email and password.");
      return;
    }
    if (!trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      console.log({
        email: trimmedEmail,
        password: trimmedPassword,
        rememberMe
      });
      setIsLoading(false);
    }, 1200);
  };
  
  return (
    <div className="login-page">
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>
      <div className="background-circle circle-three"></div>
      <div className="login-card">
        <h1 className="logo">
          Re<span className="logo-accent">:</span>Verse
        </h1>
        <p className="subtitle">
          Meet God one verse at a time
        </p>
        <div className="social-buttons">
          <button
            className="social-button kakao-button"
            type="button"
            onClick={handleKakaoLogin}
          >
            💬 Continue with Kakao
          </button>
          <button
            className="social-button google-button"
            type="button"
            onClick={handleGoogleLogin}
          >
            🔵 Continue with Google
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form
          className="login-form"
          onSubmit={handleLogin}
        >
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className="remember-row">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />
              <span>
                Keep me signed in
              </span>
            </label>
          </div>
          <button
            className="login-button"
            type="submit"
            disabled={isLoading}
          >
            {
              isLoading
                ? "Logging in..."
                : "Login"
            }
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
        
