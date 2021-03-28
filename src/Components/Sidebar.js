import React from "react";
import SidebarProfile from "./SidebarProfile";
import "../Css/sidebar.css";
import { SidebarData } from "./SidebarData";
import { Col, Image, Button, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Link, useHistory } from "react-router-dom";

const Sidebar = (props) => {
  const history = useHistory();
  const [active, setActive] = useState(0);
  let drawerClasses = "Sidebar";
  if (props.show) {
    drawerClasses = "Sidebar open";
  }

  const onClickActive = (val) => {
    setActive(val.state);
    history.push(val.link);
    props.click();
  };

  return (
    <nav className={drawerClasses}>
      <SidebarProfile />
      <div>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <Link to={val.link} key={key}>
                {" "}
                <li
                  className="row"
                  id={key === active ? "active" : ""}
                  onClick={() => {
                    onClickActive(val);
                  }}
                >
                  {" "}
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
};

export default Sidebar;
