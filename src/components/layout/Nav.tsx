'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';

const linkIds = [
  { href: '#sobre-nosotros', key: 'about' },
  { href: '#servicios', key: 'services' },
  { href: '#proyectos', key: 'projects' },
  { href: '#proceso', key: 'process' },
  { href: '#testimonios', key: 'testimonials' },
  { href: '#contacto', key: 'contact' },
] as const;

export function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === 'en' ? 'es' : 'en');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-glass py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/greendland-logo.jpeg"
            alt="Green Land Solutions"
            width={140}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav + language switcher */}
        <nav className="hidden lg:flex items-center gap-8">
          {linkIds.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-700 hover:text-brand-green-dark font-body text-sm font-medium transition-colors duration-200"
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          {/* Language switcher: EN | ES */}
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-neutral-600 hover:text-brand-green-dark hover:bg-brand-green-light/20 transition-colors font-body text-sm"
            aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            <span className={locale === 'en' ? 'font-semibold text-brand-green-dark' : ''}>EN</span>
            <span className="text-neutral-400">|</span>
            <span className={locale === 'es' ? 'font-semibold text-brand-green-dark' : ''}>ES</span>
          </button>
          <Link
            href="#contacto"
            className="ml-2 px-5 py-2.5 bg-brand-green-dark text-white text-sm font-heading font-semibold rounded-lg hover:bg-brand-green-mid transition-colors duration-200"
          >
            {t('nav.quote')}
          </Link>
        </nav>

        {/* Mobile: language + menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1 px-2 py-1.5 rounded-md text-neutral-600 hover:text-brand-green-dark font-body text-sm"
            aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            <span className={locale === 'en' ? 'font-semibold text-brand-green-dark' : ''}>EN</span>
            <span className="text-neutral-400">|</span>
            <span className={locale === 'es' ? 'font-semibold text-brand-green-dark' : ''}>ES</span>
          </button>
          <button
            type="button"
            aria-label={t('nav.openMenu')}
            className="p-2 text-brand-green-dark"
            onClick={() => setMobileOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6"
            >
              <button
                type="button"
                aria-label={t('nav.closeMenu')}
                className="absolute top-4 right-4 p-2 text-neutral-600"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-6 pt-12">
                {linkIds.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-brand-green-dark font-body font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ))}
                <Link
                  href="#contacto"
                  className="mt-4 px-5 py-3 bg-brand-green-dark text-white font-heading font-semibold rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('nav.quote')}
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
