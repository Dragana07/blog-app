import React from "react";
import "./main.style.css";
import CardComponent from "../Card/CardComponent";


function Main() {
  const posts = [
    {
      imgSrc: "../../Images/bee.jpg",
      title: "Title 1",
      text: "Text 1",
    },
    {
      imgSrc: "sdsdsdsdsdsdds",
      title: "Title 2",
      text: "Text 2",
    },
    {
      imgSrc: "sdsdsdsd",
      title: "Title 3",
      text: "Text 3",
    },
    {
      imgSrc: "sdsdsd",
      title: "Title 4",
      text: "Text 4",
    },
  ];
  return (
    <div className="main" id={'main'}>
      
        <h1>Our Video Catalog</h1>
      
      <div className="cardPosition">
        {posts.map((blog) => {
          return (
            <CardComponent
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
