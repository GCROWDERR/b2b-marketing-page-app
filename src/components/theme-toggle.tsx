import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className="size-12 rounded-[10px] border-primary bg-transparent text-surface-inverse-fg hover:bg-surface-inverse-fg/10"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="size-5 text-surface-inverse-fg" aria-hidden />
      ) : (
        <Moon className="size-5 text-surface-inverse-fg" aria-hidden />
      )}
    </Button>
  );
}
