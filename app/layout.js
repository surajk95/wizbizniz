import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import FetchData from "@/components/fetch-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wizbizniz",
  description: "Dashboard made from my favorite youtubers' channels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FetchData />
      <body className={inter.className}>
        <main className="flex min-h-screen w-full">
          <Sidebar />
          {children}
        </main>
        </body>
    </html>
  );
}
