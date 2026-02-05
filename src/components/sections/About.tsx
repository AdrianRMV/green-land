'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const statKeys = [
  { value: 15, suffix: '+', key: 'years' },
  { value: 500, suffix: '+', key: 'projects' },
  { value: 98, suffix: '%', key: 'clients' },
] as const;

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const step = value / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-nosotros" className="py-20 lg:py-28 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal direction="right">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-6">
                {t('about.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {t('about.para1')}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-neutral-600 leading-relaxed">
                {t('about.para2')}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-green-mid to-brand-green-dark flex items-center justify-center text-white font-heading text-lg">
                {t('about.imagePlaceholder')}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {statKeys.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl sm:text-5xl text-brand-green-dark mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-neutral-600 font-body text-sm sm:text-base">
                  {t(`about.stats.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
