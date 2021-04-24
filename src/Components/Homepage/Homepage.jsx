import React from 'react';
import '.././../CSS/Homepage.css'

function Homepage() {
  return (
    <div className= "homepage">
      <header className= "App-header">
        <Page />
        </header>
    </div>
  );
}

const Page =() =>{
    return(
    <article>
    <h1>TRIUMPH</h1>
    <p><i>A home of Career oppourtunity</i></p>
    </article>
    );
};

export default Homepage;
