'use client';

import { CheckCircle2, Clock, Cpu, Layers, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Cpu,
    title: 'Modern Technologies',
    description: 'Cutting-edge stack for scalable SaaS-grade solutions.',
  },
  {
    icon: Clock,
    title: 'Fast & Reliable Delivery',
    description: 'Predictable timelines with quality-driven sprints.',
  },
  {
    icon: CheckCircle2,
    title: 'Skilled Dev Team',
    description: 'Experienced frontend, backend, and UX talent.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Secure development practices, audits, and compliance readiness.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Future-proof designs built for load, growth, and maintenance.',
  },
  {
    icon: Wrench,
    title: 'Continuous Improvement',
    description: 'OSHQA cycles, detailed tracking, and iterative performance gains.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Verqora
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-slate-300"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We blend creativity, engineering discipline, and deep collaboration so your business gets value quickly.
        </motion.p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 text-left shadow-soft transition hover:-translate-y-1 hover:border-brand-400 hover:bg-slate-800"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
