import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Button1 from "../src/components/Button/Button1";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import CardComponent from "./components/Card/CardComponent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Hero />
      <Button1 />
      <Main />
      <CardComponent />
      <Footer />
    </div>
  );
}

export default App;
