import React from "react";
import Home from "../Components/Homepage/Homepage";
import "../CSS/Homepage.css";

const content = "A home of Career oppourtunity";

const imgUrl =
  "https://images.photocase.com/x/xntjl435/nuc5ledn/photocasenuc5ledn3.jpg?1494258600";

function Homepage() {
  return (
    <div className="homepage">
      <header className="App-header">
        <Home  title={"TRIUMPH"} content={content} image={imgUrl} />
      </header>
    </div>
  );
}

export default Homepage;
// function Homepage() {
//   return (
//     <div className="homepage">
//       <header className="App-header">
//         <Page />
//       </header>
//     </div>
//   );
// }

// const Page = () => {
//   return (
//     <article>
//       <h1>TRIUMPH</h1>
//       <p>
//         <i>A home of Career oppourtunity</i>
//       </p>
//     </article>
//   );
// };
