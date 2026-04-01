export const metadata = {
  title: 'Verqora | Home',
  description: 'Modern IT solutions for business growth with Verqora.',
};

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#020617_0%,#06142a_100%)] text-white">
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Portfolio</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">A highlight of modern projects delivered with Verqora’s world-class delivery process.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-400">
                <h3 className="text-xl font-semibold text-white">Weather Application</h3>
                <p className="mt-2 text-slate-300">Realtime weather insights with clean UI using React, TypeScript, and API orchestration.</p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-400">
                <h3 className="text-xl font-semibold text-white">Resume Builder</h3>
                <p className="mt-2 text-slate-300">Dynamic resume generation and PDF export in a polished, responsive web app.</p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-400">
                <h3 className="text-xl font-semibold text-white">Landing Page Projects</h3>
                <p className="mt-2 text-slate-300">Custom modern landing pages optimized for conversion and SEO.</p>
              </article>
            </div>
            <div className="mt-8 text-center text-slate-300">Completed 50+ projects with 100% quality focus and trusted client relationships.</div>
          </div>
        </section>
      </main>
    </div>
  );
}
