"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import "./theme-toggle.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="icon-size" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="toggle-button"
    >
      <Sun
        className={`icon-size transition-all  sun-icon ${theme === "dark" ? "show" : "hide"}`}
      />
      <Moon
        className={`icon-size transition-all  moon-icon ${theme === "dark" ? "hide" : "show"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}