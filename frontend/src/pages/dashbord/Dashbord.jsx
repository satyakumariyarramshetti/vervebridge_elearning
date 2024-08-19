// src/pages/dashbord/Dashbord.jsx
import React from "react";
import "./dashbord.css";
import FileManager from "../../components/FileManager";

const Dashbord = () => {
  return (
    <div className="student-dashboard">
      <div className='headline'>
        <div className='heading'>
      <h2>STUDENT PERSONAL AND ADVANCED LIBRARY</h2>
      </div>
      <div className='image-tag'>
      <img src='https://w7.pngwing.com/pngs/814/530/png-transparent-contra-costa-county-library-digital-library-integrated-library-system-public-library-others-book-library-middletown-public-library-central-library-thumbnail.png'/>
    </div>
    </div>
      <FileManager />
    </div>
  );
};

export default Dashbord;
