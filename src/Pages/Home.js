import React, { useState } from "react";
import Toolbar from "../Components/Toolbar/Toolbar";

import Sidebar from "../Components/Sidebar";
import Backdrop from "../Components/Backdrop/Backdrop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Harry from "./Harry";
import Tony from "./Tony";
import HomeContent from "./HomeContent";
import Sam from "./Sam";
import Avez from "./Avez";

import "../Css/home.css";

const Home = (props) => {
  const [state, setState] = useState({
    sideDrawerOpen: false,
  });

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backdrop;
  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <Sidebar show={state.sideDrawerOpen} click={backdropClickHandler} />
      {backdrop}
      <main className="main">
        <Switch>
          <Route exact path="/Tony">
            <Tony />
          </Route>
          <Route exact path="/Harry">
            <Harry />
          </Route>
          <Route exact path="/">
            <HomeContent />
          </Route>
          <Route exact path="/Avez">
            <Avez />
          </Route>{" "}
          <Route exact path="/Sam">
            <Sam />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Home;
