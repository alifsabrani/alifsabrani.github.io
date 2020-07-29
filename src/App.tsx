import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";

import "./styles/fonts.css";
import "./styles/index.css";

const Home = React.lazy(() => import("./pages/home"));
const Contact = React.lazy(() => import("./pages/contact"));
const Portofolio = React.lazy(() => import("./pages/portofolio"));

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
            <Route path="/contact">
              <Suspense fallback={<div>Loading...</div>}>
                <Contact></Contact>
              </Suspense>
            </Route>
            <Route path="/portofolio">
              <Suspense fallback={<div>Loading...</div>}>
                <Portofolio></Portofolio>
              </Suspense>
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
