import React from "react";
import ".././../CSS/Homepage.css";

function Home({ title, content, image }) {
  return (
    <div className="">
      <h1 className="heading">{title}</h1>
      <article>
        <p>
          <i>{content}</i>
        </p>
      </article>
      <div className="image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default Home;
