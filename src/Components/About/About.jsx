import React from "react";
import ".././../CSS/About.css";



function About({ title, content, image }) {
  return (
    <div className="About">
      <h1 className="heading">{title}</h1>
      <article>
        <p>{content}</p>
      </article>
      <img src={image} alt={title} />
    </div> 
  );
}

export default About;
