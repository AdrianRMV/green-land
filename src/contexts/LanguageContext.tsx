'use client';

import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    ReactNode,
} from 'react';
import { Locale, translations } from '@/translations';

type Translations = typeof translations.en;

const STORAGE_KEY = 'greenland-locale';

function getStoredLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' ? 'es' : 'en';
}

const LanguageContext = createContext<{
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (path: string) => string;
    tObj: <K extends keyof Translations>(key: K) => Translations[K];
} | null>(null);

function getNested(
    obj: Record<string, unknown>,
    path: string,
): string | undefined {
    const parts = path.split('.');
    let current: unknown = obj;
    for (const part of parts) {
        if (current == null || typeof current !== 'object') return undefined;
        current = (current as Record<string, unknown>)[part];
    }
    return typeof current === 'string' ? current : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setLocaleState(getStoredLocale());
        setMounted(true);
    }, []);

    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next);
        if (typeof window !== 'undefined')
            localStorage.setItem(STORAGE_KEY, next);
    }, []);

    const t = useCallback(
        (path: string): string => {
            const value = getNested(
                translations[locale] as Record<string, unknown>,
                path,
            );
            return value ?? path;
        },
        [locale],
    );

    const tObj = useCallback(
        <K extends keyof Translations>(key: K): Translations[K] => {
            return translations[locale][key] as Translations[K];
        },
        [locale],
    );

    if (!mounted) {
        return (
            <LanguageContext.Provider
                value={{
                    locale: 'en',
                    setLocale,
                    t,
                    tObj: (key) => translations.en[key],
                }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, tObj }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx)
        throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
