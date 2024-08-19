import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";
const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Empowering Learners Worldwide</p>
      </div>

      <div className="about-content">
        <h3>Our Mission</h3>
        <p>
          We are dedicated to providing high-quality online courses that help
          individuals learn and grow in their desired fields. Our experienced
          instructors ensure that each course is tailored for effective learning
          and practical application.
        </p>

        <h3>What We Offer</h3>
        <div className="offerings">
          <div className="offer-card">
            <h4>Comprehensive Course Materials</h4>
            <p>Access all the materials you need for a successful learning experience.</p>
          </div>
          <div className="offer-card">
            <h4>Expert Instructors</h4>
            <p>Learn from industry experts with real-world experience.</p>
          </div>
          <div className="offer-card">
            <h4>Interactive Learning</h4>
            <p>Engage with interactive content designed to enhance your learning.</p>
          </div>
          <div className="offer-card">
            <h4>Flexible Schedules</h4>
            <p>Study at your own pace with flexible course schedules.</p>
          </div>
        
        </div>

        <h3>Why Choose Us?</h3>
        <p>
          At our core, we believe in the power of education to transform lives.
          Whether you're looking to advance your career, learn a new skill, or
          explore a new passion, we provide the tools and resources you need to
          succeed. Join our community of learners and start your journey today.
        </p>
      </div>

      <div className="about-footer">
        <h3>Join Our Community</h3>
        <p>
          Become part of a vibrant learning community where knowledge meets passion.
          We are here to support your educational journey every step of the way.
        </p>
        <button onClick={() => navigate("/courses")} className="cta-button">
Explore Courses</button>
      </div>
    </div>
  );
};

export default About;
