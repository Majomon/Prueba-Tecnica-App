import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

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
