import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata = {
  title: "Prueba tecnica - Perfil de usuario",
  description: "Monzón Mauricio - Desarrollador Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
