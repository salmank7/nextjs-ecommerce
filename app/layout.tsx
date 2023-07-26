import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToastProvider";
import RegisterModal from "./components/modals/RegisterModal";
import getCurrentUser from "./actions/getCurrentUser";
import PreviewModal from "./components/modals/PreviewModal";
import ClientOnly from "./components/ClientOnly";
import getFavouriteProducts from "./actions/getFavouriteProducts";

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
  const favProduts = await getFavouriteProducts();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} favProducts={favProduts} />
          <LoginModal />
          <RegisterModal />
          <PreviewModal />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
