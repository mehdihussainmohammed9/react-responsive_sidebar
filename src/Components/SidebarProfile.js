import React from "react";
import { Col, Image, Button, Container, Row } from "react-bootstrap";
import '../Css/sidebarprofile.css'

function SidebarProfile() {
  return (
    <div className="profileCard">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg"
        roundedCircle
        width="100px"
      />

      <p className="profileName">Mehdi Hussain</p>
    </div>
  );
}

export default SidebarProfile;
