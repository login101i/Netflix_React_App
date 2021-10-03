import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";
import BlogArticle1 from "./Pages/BlogArticle1";
import BlogArticle2 from "./Pages/BlogArticle2";

import Quote from "./Components/quote/quote";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  const mainContentClick = () => {
    setNavToggle(false);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <Switch>
        <>
          <div onClick={mainContentClick} className={`main-content ${navToggle ? "gray" : ""}`}>
            <div className="content">
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/blog/continuous_integration" exact>
                <BlogArticle1 />
              </Route>
              <Route path="/blog/responsive_design" exact>
                <BlogArticle2 />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </div>
            <Route path="/qtgenerator" exact>
              <Quote />
            </Route>
          </div>
        </>
      </Switch>
    </div>
  );
}

export default App;
