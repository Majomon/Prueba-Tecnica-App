import React from "react";
import { titleFont } from "@/config/fonts";
import { IoCall, IoMailOpen, IoMap } from "react-icons/io5";
import AnimationEmail from "../../../../public/animation/Animate-Email.json";
import Lottie from "lottie-react";
import styles from "./InfoContact.module.css";
import Link from "next/link";

export const InfoContact = () => {
  const phone = "+5491138612819";
  const email = "mauri.monzon91@gmail.com";
  const map = "Jose Hernandez 3284";

  return (
    <>
      <h2 className={`${titleFont.className} ${styles.contact}`}>Contáctame</h2>
      <ul className={`${titleFont.className} ${styles.ul}`}>
        <li>
          <IoCall size={20} />
          <Link href={`tel:${phone}`} className={styles.link}>
            Teléfono: {phone}
          </Link>
        </li>
        <li>
          <IoMailOpen size={20} />
          <Link href={`mailto:${email}`} className={styles.link}>
            Email: {email}
          </Link>
        </li>
        <li>
          <IoMap size={20} />

          <Link
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              map
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Dirección: {map}
          </Link>
        </li>
      </ul>
      <div className={styles.containerLottie}>
        <Lottie
          animationData={AnimationEmail}
          speed={0.5}
          className={styles.lottie}
        />
      </div>
    </>
  );
};
