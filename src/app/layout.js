import "./globals.css";

import Header from "@/components/header/Header";
import LenisScrollProvider from "@/utils/lenis-provider";

export const metadata = {
  title: "Mate Libre",
  description: "Gsap + Lenis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased font-primary`}>
        <Header />
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
