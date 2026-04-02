'use client';

import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.ok) {
      setStatus('success');
      setMessage(data.message ?? 'Submission successful.');
      form.reset();
    } else {
      setStatus('error');
      setMessage(data.error ?? 'Submission failed. Please try again.');
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-10 shadow-soft">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-base text-slate-300 sm:text-lg">Need help with your digital project? Send a message and we’ll respond within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-200">Name</span>
            <input
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-brand-400"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-200">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="your@company.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-brand-400"
            />
          </label>

          <label className="col-span-1 sm:col-span-2 space-y-1">
            <span className="text-sm font-medium text-slate-200">Message</span>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              required
              rows={6}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-brand-400"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="col-span-1 sm:col-span-2 rounded-lg bg-brand-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-brand-600 disabled:cursor-wait disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status !== 'idle' && (
          <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
        )}
      </section>
    </main>
  );
}
