"use client";
import { titleFont } from "@/config/fonts";
import { FormContact } from "../ui";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section id="contact" className={styles.containerContact}>
      <h2 className={`${titleFont.className} ${styles.contact}`}>Contáctame</h2>
      <div className={styles.contactForm}>
        <FormContact />
      </div>
    </section>
  );
};
