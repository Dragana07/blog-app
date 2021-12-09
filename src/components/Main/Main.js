import React, { useEffect, useState } from "react";
import "./main.style.css";
import CardComponent from "../Card/CardComponent";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import bee from "../../Images/bee.jpg";

function Main() {
  const posts = [
    {
      urlToImage: bee,
      title: "Title 1",
      content: "Text 1",
    },
    {
      urlToImage: "sdsdsdsdsdsdds",
      title: "Title 2",
      content: "Text 2",
    },
    {
      urlToImage: "sdsdsdsd",
      title: "Title 3",
      content: "Text 3",
    },
    {
      urlToImage: "sdsdsd",
      title: "Title 4",
      content: "Text 4",
    },
  ];
  const [allPosts, setAllPosts] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [techCrunch, setTechCrunch] = useState([]);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-08&to=2021-12-08&sortBy=popularity&pageSize=6&apiKey=b3b1916bf7d34272adfa7fc923188376";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data.articles === undefined ? posts : data.articles);
      });
  }, []);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=b3b1916bf7d34272adfa7fc923188376";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTesla(data.articles === undefined ? posts : data.articles);
      });
  }, []);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b3b1916bf7d34272adfa7fc923188376";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTechCrunch(data.articles === undefined ? posts : data.articles);
      });
  }, []);

  // console.log(tesla, "opop");

  return (
    <div className="main" id={"main"}>
      <h1>Our Video Catalog</h1>
      <h3>Categories</h3>
      <div>
        <Tabs>
          <Tab eventKey="allPosts" title="All Posts">
            <div className="cardPosition">
              {allPosts.map((blog) => {
                return (
                  <CardComponent
                    imgSrc={blog.urlToImage}
                    title={blog.title}
                    text={blog.content}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="tesla" title="Tesla">
            <div className="cardPosition">
              {tesla.map((blog) => {
                return (
                  <CardComponent
                    imgSrc={blog.urlToImage}
                    title={blog.title}
                    text={blog.content}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="techCrunch" title="TechCrunch">
            <div className="cardPosition">
              {techCrunch.map((blog) => {
                return (
                  <CardComponent
                    imgSrc={blog.urlToImage}
                    title={blog.title}
                    text={blog.content}
                  />
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Main;
