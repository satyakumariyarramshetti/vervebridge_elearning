import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import image from './scholars_article_4.jpg'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our <br/>E-learning-Skill Developement learning website</h1>
          <p>learn,gain,skills</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;