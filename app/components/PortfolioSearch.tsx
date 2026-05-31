'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface PortfolioSearchProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export function PortfolioSearch({ onSearch, placeholder = 'Search projects, technologies...' }: PortfolioSearchProps) {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    // Keyboard shortcut (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleClear = () => {
        setQuery('');
        inputRef.current?.focus();
    };

    return (
        <motion.div
            className="relative w-full max-w-xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <div
                className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl border bg-slate-900/40 backdrop-blur-xl transition-all duration-300 ${
                    isFocused
                        ? 'border-mint/40 shadow-lg shadow-mint/10'
                        : 'border-white/10 shadow-sm'
                }`}
            >
                {/* Search Icon */}
                <Search className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
                    isFocused ? 'text-mint' : 'text-slate-400'
                }`} />

                {/* Input */}
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm font-medium"
                />

                {/* Clear Button */}
                <AnimatePresence>
                    {query && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                            onClick={handleClear}
                            className="p-1 rounded-full hover:bg-white/10 transition-colors duration-200 text-slate-400 hover:text-white"
                            aria-label="Clear search"
                        >
                            <X className="w-4 h-4" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Keyboard Hint */}
                <AnimatePresence>
                    {!query && !isFocused && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-500 font-medium"
                        >
                            <kbd className="text-slate-400">⌘</kbd>
                            <kbd className="text-slate-400">K</kbd>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Search Results Count */}
            <AnimatePresence>
                {query && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full mt-2 left-0 text-xs text-slate-500 font-medium"
                    >
                        Searching for "{query}"...
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
