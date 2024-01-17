// Navbar.js

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a
              href="#about"
              onMouseEnter={() => setActiveMenuItem(1)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onMouseEnter={() => setActiveMenuItem(2)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onMouseEnter={() => setActiveMenuItem(3)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onMouseEnter={() => setActiveMenuItem(4)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              Contact
            </a>
          </li>
          <div
            className={`${styles.animation} ${
              activeMenuItem && styles[`start_${activeMenuItem}`]
            }`}
          ></div>
        </ul>
      </div>
    </nav>
  );
};
