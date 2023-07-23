import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToastProvider";
import RegisterModal from "./components/modals/RegisterModal";
import getCurrentUser from "./actions/getCurrentUser";
import PreviewModal from "./components/modals/PreviewModal";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Clothes",
  description: "Buy some clothes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        <PreviewModal />
        {children}
      </body>
    </html>
  );
}
