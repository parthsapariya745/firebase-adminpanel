import { signInWithEmailAndPassword, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  let handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        alert("Login Successfully")
        navigate("/Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        const errorMessage = error.message;
        console.log(errorMessage);

        alert("Email and password are incorrected!")
      });

    setEmail("")
    setPassword("")
  };

  let handleSignInWithGoogle = () => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(token, user);
        alert("SignIn with Google Successfull")
        navigate('/Home')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode, errorMessage, email, credential);
      });
  }

  return (
    <div class="auth box">
      <h1 class="form-title">Sign In</h1>

      <form action="">
        <button type="button" class="google-btn" onClick={handleSignInWithGoogle}>
          <span class="g-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path d="M533.5 278.4c0-17.5-1.6-34.2-4.6-50.4H272v95.5h147.2c-6.3 34.2-25.6 63.2-54.7 82.6v68.6h88.4c51.7-47.6 81.6-118 81.6-196.3z" fill="#4285f4" />
              <path d="M272 544.3c73.6 0 135.5-24.4 180.7-66.3l-88.4-68.6c-24.6 16.6-56 26.4-92.3 26.4-70.9 0-131-47.9-152.4-112.2H28.6v70.5C73.5 492 166.6 544.3 272 544.3z" fill="#34a853" />
              <path d="M119.6 321.6c-11.2-33.6-11.2-69.9 0-103.5V147.6H28.6c-40.7 79.6-40.7 175.1 0 254.8l91-81z" fill="#fbbc04" />
              <path d="M272 107.7c39.9 0 75.8 13.7 104 40.6l78-78C407 24 345.1 0 272 0 166.6 0 73.5 52.3 28.6 147.6l91 70.5C141 155.6 201.1 107.7 272 107.7z" fill="#ea4335" />
            </svg>
          </span>

          <span class="btn-text">Sign In with Google</span>
        </button>

        <div class="or-sep" role="separator" aria-hidden="true">
          <span class="or-text">OR</span>
        </div>

        <div class="field">
          <label for="email" class="sr-only">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your Email"
          />
        </div>

        <div class="field">
          <label for="password" class="sr-only">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your Password"
          />
        </div>

        <button class="cta" onClick={handleLogin}>Login</button>

        <p class="meta">
          Don't have an account?
          <Link to="/" class="signin-link">
            SignUp Now
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;