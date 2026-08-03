import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import PageTitle from "./components/PageTitle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

// Home stays in the main bundle; the rest load on demand so react-pdf and the
// project images are not downloaded by every first-time visitor.
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <ScrollToTop />
        <PageTitle />
        <main id="main-content">
          <Suspense fallback={<div className="route-fallback">Loading…</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/project" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
