"use client";

import { Form, InfoContact } from "../ui";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.containerContact}>
      <div className={styles.containerInfoContact}>
        <InfoContact />
      </div>
      <div className={styles.contactForm}>
        <Form />
      </div>
    </section>
  );
};
