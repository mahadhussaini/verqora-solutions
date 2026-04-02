'use client';

import { CheckCircle2, Code2, Cpu, Layers, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Fast, responsive, and professional websites with modern tooling.',
    points: ['SEO-friendly markup', 'Mobile-first design', 'Accessibility compliant'],
  },
  {
    icon: Layers,
    title: 'Frontend Development',
    description: 'Modern UI/UX using React, Next.js, and latest frameworks.',
    points: ['Component libraries', 'State management', 'UX performance optimization'],
  },
  {
    icon: ShieldCheck,
    title: 'Backend Development',
    description: 'Secure, scalable systems with APIs and database integrations.',
    points: ['REST/GraphQL API design', 'Postgres, MySQL, MongoDB', 'Authentication & RBAC'],
  },
  {
    icon: Wrench,
    title: 'Bug Fixing & Optimization',
    description: 'Improve performance and resolve issues in existing systems.',
    points: ['Code audits and remediation', 'Database query tuning', 'Performance metrics tracking'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950/70 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          End-to-end delivery with clear milestones and production-ready architecture for your digital goals.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/70 p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-400 hover:bg-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                {item.points && (
                  <ul className="mt-3 space-y-1 text-sm text-slate-300">
                    {item.points.map(point => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
