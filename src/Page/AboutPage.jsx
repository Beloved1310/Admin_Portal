import React from "react";
import About from "../Components/About/About";

const content = `
content={"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, adipisci. Obcaecati molestias, non eos nisi nihil perferendis atque qui cum id dignissimos aperiam molestiae facere, praesentium quis saepe? A recusandae necessitatibus doloremque consequuntur perferendis rerum inventore assumenda molestias eaque aut eveniet quia harum, id nesciunt odit facilis repellendus, reprehenderit neque!"}
`;
const imgUrl = "https://cdn.nohat.cc/thumb/f/720/5637714231689216.jpg";



const AboutPage = () => {
  return (
    <div>
      <About title={"About Us"} content={content} image={imgUrl} />
    </div>
  );
};

export default AboutPage;
