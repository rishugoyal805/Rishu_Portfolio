import { Inter } from "next/font/google";
import "./globals.css"; // moved CSS path assuming it's in 'styles'

import ClientWrapper from "@/components/client-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishu Goyal | Portfolio",
  description: "Personal portfolio website of Rishu Goyal",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}