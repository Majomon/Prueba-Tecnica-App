import user from "@/data/user";
import Link from "next/link";
import styles from "./About.module.css";
import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { titleFont } from "@/config/fonts";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.presentation}>
        <h1 className={`${titleFont.className} ${styles.h1}`}>
          Hola! 😊. Mi nombre es {user.firstName}
        </h1>
        <h2 className={styles.h2}>Soy {user.profession}</h2>
        <div className={styles.containerAboutMe}>
          <p className={styles.aboutMeP}>{user.about}</p>
          <div className={styles.containerContact}>
            <Link href={"#contact"} className={styles.contact}>
              Contáctame
            </Link>
            <div className={styles.redes}>
              <Link href={"https://www.facebook.com/"} target="_blank">
                <IoLogoFacebook size={30} color="black" />
              </Link>
              <Link href={"https://www.instagram.com/"} target="_blank">
                <IoLogoInstagram size={30} color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerImage}>
        <Image
          src={user.image}
          alt={user.firstName}
          width={1400}
          height={800}
          className={styles.image}
        />
        <div className={styles.box} />
      </div>
    </section>
  );
};
