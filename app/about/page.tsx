export const metadata = {
  title: 'Verqora | About',
  description: 'Learn about Verqora mission, vision and values.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">About Verqora</h1>
        <p className="mt-4 text-lg text-slate-300">
          Verqora is a passionate team creating innovative, scalable digital products and platforms for businesses globally.
          We help startups and enterprises build product-market fit quickly while maintaining long-term engineering quality.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Mission</h2>
            <p className="mt-2 text-slate-300">Deliver reliable, future-ready products that drive growth, reduce risk, and improve operational efficiency for clients.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Vision</h2>
            <p className="mt-2 text-slate-300">Be the go-to partner for teams who want modern architecture, transparent process, and relentless product focus.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Values</h2>
            <p className="mt-2 text-slate-300">Confidence through competence, strong communication, continuous improvement, and client-centricity.</p>
          </article>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
            <h2 className="text-2xl font-semibold text-white">Our Approach</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Discovery workshops + problem validation</li>
              <li>Modular architecture with test coverage</li>
              <li>CI/CD and automated release process</li>
              <li>Ongoing maintenance and performance reviews</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
            <h2 className="text-2xl font-semibold text-white">What You Get</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Clear delivery roadmap and weekly progress reports</li>
              <li>Working MVP in 4-8 weeks (<em>typical</em>)</li>
              <li>Full documentation, handover, and developer enablement</li>
              <li>Data confidentiality and code ownership rights</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
