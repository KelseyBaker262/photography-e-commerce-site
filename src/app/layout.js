import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/header.jsx";
import Logo from "./logo/logo.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {/* <Header /> */}
          <Logo />

          <main className="site-main"> {children}</main>
        </div>
      </body>
    </html>
  );
}
