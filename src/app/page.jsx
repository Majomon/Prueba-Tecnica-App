import { About } from "@/components/About/About";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Header } from "@/components/Header/Header";
import { Interests } from "@/components/Interests/Interests";
import { NavMobile } from "@/components/ui";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <NavMobile />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
