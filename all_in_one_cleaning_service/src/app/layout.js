import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All in one cleaning Services",
  description: "All in one cleaning Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id="home"><Navbar />{children}</body>
    </html>
  );
}
