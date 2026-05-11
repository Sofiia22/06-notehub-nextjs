import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
export const metadata: Metadata = {
  title: "NoteHub",
  description: "A simple note management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TanStackProvider>{children}</TanStackProvider>
        <Footer />
      </body>
    </html>
  );
}
