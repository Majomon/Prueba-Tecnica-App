"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import { titleFont } from "@/config/fonts";
import { FormContact } from "../ui";

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section id="contact" className={styles.containerContact}>
      <h2 className={titleFont.className}>Contáctame</h2>

      {success ? (
        <p>¡Mensaje enviado con éxito!</p>
      ) : (
        <div className={styles.contactForm}>
          <FormContact setSuccess={setSuccess} />
        </div>
      )}
    </section>
  );
};
