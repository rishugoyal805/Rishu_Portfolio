// ✅ app/components/client-wrapper.jsx (Client Component)
"use client"; // ✅ Mark this as a Client Component

import React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import "./client-wrapper.css"; // Assuming CSS is in the same folder

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ScrollProgress />
      <Header />
      {children}
    </ThemeProvider>
  );
}
