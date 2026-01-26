import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Optimize Google Font for the body
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// Optimize your Brand Font
const cormorant = localFont({
  src: "./fonts/BebasNeue-Regular.ttf", // Adjust path if needed
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Nai Adventures | Explore the Extraordinary",
  description: "Luxury travel experiences and mountain trails with NAI Adventures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
       </body>
    </html>
  );
}