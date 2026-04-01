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
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-slate-300">Need help with your digital project? Send a message.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Name" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none" />
          <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none" />
          <textarea name="message" placeholder="Message" required rows={6} className="col-span-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none" />
          <button type="submit" disabled={status === 'sending'} className="col-span-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
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
