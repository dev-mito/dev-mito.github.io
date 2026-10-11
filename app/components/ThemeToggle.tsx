"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Contrast } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon-lg"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Contrast />
        </Button>
    );
}
