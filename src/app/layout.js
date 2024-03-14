import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./ui/NavBar";
import { ReservationForm } from "./ui/ReservationForm/ReservationForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className="overflow-x-hidden h-full"
    >
      <body className={`
        ${inter.className}
        bg-[#0A0A0A]
        flex
        justify-center
        overflow-x-hidden
        h-full
        relative
      `}>
        <NavBar/>
        <main
          className="
          w-full
          max-w-3xl
          "
        >
          {children}
        </main>
        <ReservationForm/>
      </body>
    </html>
  );
}
