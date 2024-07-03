import { About } from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { Interests } from "@/components/Interests/Interests";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
