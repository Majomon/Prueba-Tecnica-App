"use client";
import { titleFont } from "@/config/fonts";
import { useContactForm } from "@/hooks/useContactForm";
import { IoSendOutline } from "react-icons/io5";
import styles from "./FormContact.module.css";

export const FormContact = () => {
  const { formData, handleChange, handleSubmit, success, errors } =
    useContactForm();

  return (
    <>
      {success ? (
        <p>¡Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.box}>
            <label className={styles.label}>Nombre:</label>
            <input
              className={`${titleFont.className} ${styles.valueInput}`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan"
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.box}>
            <label className={styles.label}>Email:</label>
            <input
              className={`${titleFont.className} ${styles.valueInput}`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@juan.com"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.box}>
            <label className={styles.label}>Mensaje:</label>
            <textarea
              className={`${titleFont.className} ${styles.valueInput}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={10}
              placeholder="Ingresá tu mensaje"
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.buttonSend}>
            <IoSendOutline color="black" size={20} />
            Enviar
          </button>
        </form>
      )}
    </>
  );
};
