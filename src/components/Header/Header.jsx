import React from "react";
import { Headboard, Nav } from "../ui";
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.headerContainer }>
      <Headboard />
      <Nav />
    </header>
  );
};
