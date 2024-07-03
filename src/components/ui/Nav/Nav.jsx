import navLinks from "@/data/navLinks";
import Link from "next/link";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};
