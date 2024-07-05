import user from "@/data/user";
import React from "react";
import styles from "./Interests.module.css";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export const Interests = () => {
  return (
    <section id="interests" className={styles.container}>
      <h2 className={titleFont.className}>Intereses</h2>
      <ul className={styles.containerLu}>
        {user.interests.map((interest, index) => (
          <li key={index} className={styles.interestLi}>
            <Image
              src={interest.svg}
              alt={interest.svg}
              width={40}
              height={40}
              className={styles.interestImg}
            />
            <p className={styles.interestName}>{interest.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
