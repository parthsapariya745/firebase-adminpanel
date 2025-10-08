import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

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

  return (
    <div class="auth box">
      <h1 class="form-title">Login</h1>

      <form action="">
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

        <button class="cta" onClick={handleLogin}>
          Login
        </button>

        <p class="meta">
          Don't have an account?
          <Link to="/" class="signin-link">
            Signup Now
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;