import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <img
        src={getImageUrl("about/aboutImg.png")}
        alt="about image"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>HTML, CSS, Javascript, React, Redux</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>Node, Express, Java, Python, MongoDB, MySQL</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
