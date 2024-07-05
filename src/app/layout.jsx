import { inter } from "@/config/fonts";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata = {
  title: "Prueba tecnica - Perfil de usuario",
  description: "Monzón Mauricio - Desarrollador Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="bottom-right" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
