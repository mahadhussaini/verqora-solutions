'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(232,121,249,0.18),_transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <motion.h1
          className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Smart Digital Solutions with Verqora
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-200 sm:text-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Modern IT solutions for business growth.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.03] hover:bg-brand-600"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-slate-200/30 bg-slate-800 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:scale-[1.03] hover:border-brand-400 hover:text-white"
          >
            View Portfolio
          </a>
        </motion.div>

        <motion.div
          className="mt-14 mx-auto max-w-4xl rounded-3xl border border-slate-500/30 bg-slate-900/70 p-8 shadow-soft"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-slate-300">
            End-to-end digital engineering for startups and enterprises: responsive user experiences, secure APIs, and optimized performance for fast launch and business-ready growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
