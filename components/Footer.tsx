'use client';

import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-600/40 bg-slate-950/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-white">Get in touch</h3>
          <p className="mt-3 text-slate-300">Email: contact@verqora.com</p>
          <p className="mt-1 text-slate-300">Phone: +1 (800) 123-4567</p>
          <div className="mt-4 flex items-center gap-3 text-slate-300">
            <a href="https://linkedin.com" className="rounded-full p-2 transition hover:bg-brand-500/20">
              <Linkedin size={18} />
            </a>
            <a href="https://instagram.com" className="rounded-full p-2 transition hover:bg-brand-500/20">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" className="rounded-full p-2 transition hover:bg-brand-500/20">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} Verqora. All rights reserved.</p>
    </footer>
  );
}
