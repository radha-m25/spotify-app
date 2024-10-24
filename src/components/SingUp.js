import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];
    const isUserExist = existingUsers.some((user) => user.email === email);
    if (isUserExist) {
      setMessage("User already exist!!!");
      return;
    }
    const newUser = { firstName, lastName, email, password };
    const updateUsers = [...existingUsers, newUser];
    localStorage.setItem("userDetails", JSON.stringify(updateUsers));
    setMessage("SignUp Successful");
    navigate("/login");
  };

  return (
    <>
      <h1>SPOTIFY SIGNUP</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="lastName"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassowrd(e.target.value)}
            required
          />
          {message && <div>{message}</div>}
          <button className="login-btn" type="Submit">
            SignUp
          </button>
          <p>Already SignUp?</p>
          <button
            className="login-btn"
            type="Submit"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
