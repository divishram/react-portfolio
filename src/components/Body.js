import React from 'react';
import "../App.css";

const Body = () => {
      return (  
        <div>
        <div className="container">
          <h2>Divish Ram</h2>
          <h2>Toronto based web developer</h2>
          <button type="button" id="btn">View Work</button>
        </div>
        <h2>Skills</h2>
        <div className="skills">
          <a href="#" className="fa fa-html5 fa-3x" />
          <a href="#" className="fa fa-css3 fa-3x" />
          <a href="#" className="fa fa-database fa-3x" />
          <a href="#" className="fa fa-bug fa-3x" />  
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>My name is Divish Ram and I a student at Humber College.
            I am enrolled in the Web Development program. I hope to become
            a full-stack web developer in the future. I understand HTML, CSS,
            and JavaScript. I am trying to learn back-end technologies as well
            like PHP, C#, Node.js etc.
          </p>
        </div>
      </div>
      );
}

export default Body;
    
