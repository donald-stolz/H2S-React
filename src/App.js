import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route path="/" exact component={Home} />
    </div>
  </Router>
);

export default App;
