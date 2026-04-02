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

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">About Verqora</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">We’re a full-stack software lab building high-growth products and platforms with rapid delivery and sustainable architecture.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                <p className="mt-2 text-slate-300">Empower businesses with digital products built for measurable impact, speed, and reliability.</p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                <p className="mt-2 text-slate-300">Be the trusted technology partner for teams who demand modern engineering and transparent delivery.</p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-white">Core Values</h3>
                <p className="mt-2 text-slate-300">Agility, collaboration, quality engineering, and long-term customer trust.</p>
              </article>
            </div>
          </div>
        </section>

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
