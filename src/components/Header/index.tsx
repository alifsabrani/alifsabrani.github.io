import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Alif Sabrani</div>
      <div className={styles.navs}>
        <NavLink className={styles.navLink} to="/home">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/portofolio">
          Portofolio
        </NavLink>
        <NavLink className={styles.navLink} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}
