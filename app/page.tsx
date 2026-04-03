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
      </main>
    </div>
  );
}
