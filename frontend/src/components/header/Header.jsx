/*import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from './Screenshot_2024_0802_173920.jpg';

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">
        <img  className='s' src={Logo} width='90px' height='70px'/>
        <div className="e">E-Learning</div>
         </div>

       <div className="link">
        <Link to={"/"} class='h'>Home</Link>
        <Link to={"/courses"} class='h'>Courses</Link>
        <Link to={"/about"} class='h'>About</Link>
        {isAuth ? (
          <Link to={"/account"} class='h'>Account</Link>
        ) : (
          <Link to={"/login"} class='h'>Login</Link>
        )}
        
      </div>
       
       

      
    </header>
  );
};

export default Header;*/
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from './Screenshot_2024_0802_173920.jpg';

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">
        <img className='s' src={Logo} width='90px' height='70px' alt="Logo" />
        <div className="e">E-Learning</div>
      </div>

      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="link-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </label>
          <Link to="/" className="h">Home</Link>
          <Link to="/courses" className="h">Courses</Link>
          <Link to="/about" className="h">About</Link>
          {isAuth ? (
            <Link to="/account" className="h">Account</Link>
          ) : (
            <Link to="/login" className="h">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
