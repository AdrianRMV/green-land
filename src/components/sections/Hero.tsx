'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-light/30 via-white to-brand-green/20" />
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-brand-green-dark via-brand-green-mid to-transparent opacity-90"
          style={{ clipPath: 'ellipse(120% 100% at 50% 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-green via-brand-green-light/80 to-transparent opacity-70"
          style={{ clipPath: 'ellipse(140% 100% at 50% 100%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/greendland-logo.jpeg"
            alt="Green Land Solutions"
            width={240}
            height={90}
            className="mx-auto h-20 sm:h-24 w-auto object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-green-dark mb-6 leading-tight"
        >
          {t('hero.headline1')}{' '}
          <span className="text-brand-green-mid">{t('hero.headline2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button href="#contacto" variant="primary" size="lg">
            {t('hero.cta')}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#sobre-nosotros" className="flex flex-col items-center gap-2 text-brand-green-dark/70 hover:text-brand-green-dark">
          <span className="text-xs font-body uppercase tracking-wider">{t('hero.scrollHint')}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2"
          >
            <span className="w-1 h-1 rounded-full bg-current" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
