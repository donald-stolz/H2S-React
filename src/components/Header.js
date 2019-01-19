import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/MyOtherPage/">
            Page 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
