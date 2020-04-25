import React from "react";
import Footer from "./common/Footer";
import "styles/Login.scss";
import LoginForm from "./Login/LoginForm";
import LoginImg1 from "img/login1.svg";
import LoginImg2 from "img/login2.svg";
import LoginImg3 from "img/login3.svg";
import LoginImg4 from "img/login4.svg";
import LoginImg5 from "img/login5.svg";
import LoginBackground1 from "img/background1.svg";

class Login extends React.Component {
  /**
   * constructor - sets initial state
   */

  constructor(props) {
    super(props);
    this.state = {};
  }

  getSVG(index) {
    const colors = {
      0: ["#FFB5B5", "#FFF7F3"],
      1: ["#54C9FE", "#D8F6FF"],
      2: ["#ACF53F", "#DAFFA4"],
      3: ["#FFF065", "#FFF7F3"],
      4: ["#FF94DB", "#FFE4EE"],
    };
    return (
      <svg
        className="background-svg"
        width="1084"
        height="1024"
        viewBox="0 0 1084 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M204.407 691.847C51.4294 796.853 0.666362 951.817 0 1042H1094V-14L53.4756 -6.443C178.418 14.2132 602.225 418.778 204.407 691.847Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="547"
            y1="-14"
            x2="547"
            y2="1042"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={colors[index][0]} />
            <stop offset="1" stop-color={colors[index][1]} stop-opacity="0.47" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  renderMainContent = () => {
    const loginArt = [LoginImg1, LoginImg2, LoginImg3, LoginImg4, LoginImg5];
    const index = Math.floor(Math.random() * 4);
    return (
      <div className="login-page-container">
        <div className="login-page-content">
          <LoginForm provider={this.props.provider} />
          <div className="login-page-images">
            <img className="login-page-art" src={loginArt[index]} />
            {this.getSVG(index)}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="login-page">
        {this.renderMainContent()}
        <Footer />
      </div>
    );
  }
}

export default Login;
