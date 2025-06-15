import "./globals.css";

export const metadata = {
  title: "Mate Libre",
  description: "Gsap + Lenis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased font-primary`}>{children}</body>
    </html>
  );
}
