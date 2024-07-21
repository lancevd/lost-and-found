import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/global/Sidebar";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lost and Found Unilorin - Recover Your Lost Items",
  description:
    "Lost something at Unilorin? Find it here! Students can post lost or found items, search listings, and reconnect with their belongings.",
  author: "Olamide Winner Mosobalaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <Sidebar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
