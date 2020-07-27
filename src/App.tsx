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

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              <Contact></Contact>
            </Suspense>
          </Route>
          <Route path="*">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
