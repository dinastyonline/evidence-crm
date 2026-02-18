'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-app-theme/use-theme';

import { Button } from '@repo/ui/components/ui/button';

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
