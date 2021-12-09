import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Videos from "./pages/Videos";



import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Hero />
          <Main />
          <Footer />
        </div>
      </Route>
      <Route path="/Videos">
        <Videos />
      </Route>
      <Route path="/About">
        <About />
      </Route>
     
      <Route path="/*">
        <Contact />
      </Route>
    </Switch>
    </>
  );
}

export default App;
