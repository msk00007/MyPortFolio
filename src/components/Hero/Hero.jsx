import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm saikrishna</h1>
        <p className={styles.description}>
          Full Stack Developer fluent in React, HTML, CSS, Node.js, Express.js,
          MySQL, and MongoDB. Seamlessly weaving sleek front-end design with
          powerful back-end capabilities. I thrive on surpassing expectations,
          delivering web experiences that captivate and innovate
        </p>
        <a
          href="https://drive.google.com/file/d/1z6F5XLRqz4FEZKuMf-hEqFe82FjNlD5c/view?usp=drive_link"
          className={styles.contactBtn}
          download={true}
        >
          My Resume
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/profile.jpg")}
        alt="hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
