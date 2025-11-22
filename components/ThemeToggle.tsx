'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                <i className="fa-regular fa-sun"></i>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-electric transition-all flex items-center justify-center text-gray-400 dark:text-gray-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <i className="fa-regular fa-sun"></i>
            ) : (
                <i className="fa-regular fa-moon"></i>
            )}
        </button>
    );
}
