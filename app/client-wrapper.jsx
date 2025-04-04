'use client'; // Mark this as a client component

import React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
//import './client-wrapper.css'; // Import the CSS file

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ScrollProgress />
      <Header />
      {children}
    </ThemeProvider>
  );
}
