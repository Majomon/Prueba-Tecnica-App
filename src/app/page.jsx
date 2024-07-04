import { Header } from "@/components/Header/Header";
import { NavMobile } from "@/components/ui";
import styles from "./page.module.css";
import { About } from "@/components/About/About";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <NavMobile />
      <About />
      {/* <Interests /> */}
      {/* <ContactForm /> */}
    </div>
  );
}
