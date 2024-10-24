import './App.css';
import FooterComp from './components/FooterComp';
import Header from "./components/Header";
import Login from './components/Login';
import SignUp from './components/SingUp';
import BodyComp from './components/body/BodyComp';
import SideBar from './components/body/SideBar';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <Header/>
      <div className='body-container'>
        <SideBar/>
        <BodyComp/>
      </div>
      <FooterComp/>
    </div>
  );
}

export default App;
