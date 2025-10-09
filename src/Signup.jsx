import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleSignUp = (e) => {
    e.preventDefault();

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          alert("Email & Password created Successfully");
          navigate("/Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      alert("Please fill out input fields");
    }

    setEmail("")
    setPassword("")
  };

  return (
    <div class="auth box">
      <h1 class="form-title">Sign Up</h1>

      <form action="">
        <div class="field">
          <label for="email" class="sr-only">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Create Email..."
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
            placeholder="Create Password..."
          />
        </div>

        <button class="cta" onClick={handleSignUp}> 
          Sign Up
        </button>

        <p class="meta">
          Already have an account?
          <Link to="/Login" class="signin-link">
            SignIn Now
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
