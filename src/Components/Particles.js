import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `100%`,
      height: `${window.innerHeight}px`,
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        style={{ background: "white" }}
        {...this.state}
        params={{
          particles: {
            number: {
              value: 70,
            },
            size: {
              value: 2,
            },
            color: {
              value: "#000000",
              animation: {
                enable: true,
                speed: 20,
              },
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#000000",
                blur: 0.01,
              },
            },

            shape: {
              type: "circle",
              stroke: {
                width: 0.1,
                color: "#000000",
              },
              polygon: {
                nb_sides: 4,
              },
            },
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
      />
    );
  }
}

export default Canvas;
