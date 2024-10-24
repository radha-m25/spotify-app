import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <img
        className="app-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfINGvutu3fq7j7KPYDSgxPb0p91z56DA9QQ&s"
        alt="app-icon"
      />
      <input className="search-input" type="text" placeholder="search song" />
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navigate("/")}>
          SignUp
        </button>
        <button className="nav-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
