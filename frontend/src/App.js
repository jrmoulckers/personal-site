import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
// import Navigation from 'components/Navigation';
// import Redirect from "components/Redirect";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navigation /> */}
          {/* <Header /> */}
          <div className="main-content">
            <Switch>
              <Route path="/">
                <Homepage />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
