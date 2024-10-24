import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("userDetails")) || [];
    const user = storedData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSuccess("user found 👍");
      navigate("/home");
    } else {
      setError("user not found 👎");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
    <h1>SPOTIFY LOGIN</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div>{error}</div>}
          <button className="login-btn" type="Submit">
            Login
          </button>
          <p>Not yet singIn? </p>
          <button
            className="login-btn"
            type="Submit"
            onClick={() => navigate("/")}
          >
            SignUp
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
