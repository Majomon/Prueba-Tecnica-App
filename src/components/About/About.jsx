import React from "react";
import styles from "./About.module.css";
import { TitleH2 } from "../ui/TitleH2/TutleH2";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <TitleH2 title="Soy un h2" subTitle="Subtitulo" />
    </section>
  );
};
