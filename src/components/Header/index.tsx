import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";

import styles from "./style.module.css";
import Button from "../Button";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const currentRoute = useLocation();
  useEffect(() => {
    console.log(currentRoute);
    setMenuIsOpen(false);
  }, [currentRoute]);
  return (
    <div className={styles.navContainer}>
      <div className={styles.header}>
        <div>
          {currentRoute.pathname !== "/" && (
            <NavLink className={styles.navLink} to="/">
              <div className={styles.logo}>Alif Sabrani</div>
            </NavLink>
          )}
        </div>
        <div className={styles.navs}>
          <NavLink className={styles.navLink} to="/">
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
          <Button
            variant="transparent"
            size="l"
            color="primary"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            icon
          >
            <MdMenu></MdMenu>
          </Button>
        </div>
      </div>
      {menuIsOpen && (
        <div className={styles.mobileNav}>
          <NavLink className={styles.navLink} to="/">
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
