'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = ['📋', '✏️', '🌱', '✅'];

export function Process() {
  const { t, tObj } = useLanguage();
  const processData = tObj('process');
  const steps = processData.steps;

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-4">
            {t('process.title')}
          </h2>
          <p className="text-neutral-600">
            {t('process.subtitle')}
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green-light via-brand-green to-brand-green-dark" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div
                  className={i % 2 === 0 ? 'lg:flex lg:flex-row' : 'lg:flex lg:flex-row-reverse'}
                >
                  <div className="lg:w-1/2 lg:pr-12 lg:pl-0 lg:text-right flex flex-col lg:items-end">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green-light text-2xl mb-4"
                    >
                      {icons[i]}
                    </motion.div>
                    <span className="text-brand-green-dark font-heading font-bold text-sm tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-green-dark mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden lg:flex lg:w-0 lg:flex-shrink-0 lg:justify-center">
                    <div className="w-4 h-4 rounded-full bg-brand-green-dark border-4 border-white shadow-card" />
                  </div>
                  <div className="lg:w-1/2 lg:pl-12 lg:pr-0" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
