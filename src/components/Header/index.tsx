import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./style.module.css";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const currentRoute = useLocation();
  useEffect(() => {
    setMenuIsOpen(false);
  }, [currentRoute]);
  return (
    <div className={styles.navContainer}>
      <div className={styles.header}>
        <NavLink className={styles.navLink} to="/">
          <div className={styles.logo}>Alif Sabrani</div>
        </NavLink>
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
        <div className={styles.menuButton}>
          <button onClick={() => setMenuIsOpen(!menuIsOpen)}>Open</button>
        </div>
      </div>
      {menuIsOpen && (
        <div className={styles.mobileNav}>
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
      )}
    </div>
  );
}
