import React, { Component } from "react";
import logo from "../images/logo.svg";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles.App}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default Home;
