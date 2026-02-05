'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIds = ['residencial', 'mantenimiento', 'riego', 'comercial', 'hardscaping', 'poda'] as const;
const icons = ['🌿', '✂️', '💧', '🏢', '🪨', '🌳'] as const;

function ServiceCard({
  index,
  title,
  short,
  onExpand,
}: {
  index: number;
  title: string;
  short: string;
  onExpand: () => void;
}) {
  return (
    <ScrollReveal delay={index * 0.08} direction="up">
      <motion.article
        className="group relative bg-white rounded-2xl shadow-card overflow-hidden border border-neutral-100 h-full flex flex-col"
        whileHover={{ y: -8 }}
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="p-6 sm:p-8 flex-1 flex flex-col">
          <div className="text-4xl mb-4">{icons[index]}</div>
          <h3 className="font-heading font-bold text-xl text-brand-green-dark mb-2 group-hover:text-brand-green-mid transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed flex-1">{short}</p>
          <motion.button
            type="button"
            onClick={onExpand}
            className="mt-4 text-brand-green-dark font-body font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
            whileHover={{ x: 4 }}
          >
            {/* "More details" / "Más detalles" - will be set by parent */}
            <span className="more-details-label" />
            <span aria-hidden>→</span>
          </motion.button>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-brand-green to-brand-green-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </motion.article>
    </ScrollReveal>
  );
}

export function Services() {
  const { t, tObj } = useLanguage();
  const services = tObj('services');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expanded = expandedIndex !== null ? services.list[expandedIndex] : null;

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-4">
            {t('services.title')}
          </h2>
          <p className="text-neutral-600">
            {t('services.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.list.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08} direction="up">
              <motion.article
                className="group relative bg-white rounded-2xl shadow-card overflow-hidden border border-neutral-100 h-full flex flex-col"
                whileHover={{ y: -8 }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="text-4xl mb-4">{icons[index]}</div>
                  <h3 className="font-heading font-bold text-xl text-brand-green-dark mb-2 group-hover:text-brand-green-mid transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1">{service.short}</p>
                  <motion.button
                    type="button"
                    onClick={() => setExpandedIndex(index)}
                    className="mt-4 text-brand-green-dark font-body font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    {t('services.moreDetails')}
                    <span aria-hidden>→</span>
                  </motion.button>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-brand-green to-brand-green-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label={t('contact.closeAria')}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-brand-green-dark"
                onClick={() => setExpandedIndex(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-4xl block mb-4">{icons[expandedIndex!]}</span>
              <h3 className="font-heading font-bold text-2xl text-brand-green-dark mb-4">
                {expanded.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{expanded.long}</p>
              <Button onClick={() => setExpandedIndex(null)} variant="outline" size="sm">
                {t('services.close')}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
