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
          Verqora is a passionate team creating innovative, scalable digital solutions for businesses globally.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Mission</h2>
            <p className="mt-2 text-slate-300">Deliver reliable and innovative digital solutions to enhance business growth and efficiency.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Vision</h2>
            <p className="mt-2 text-slate-300">Become a globally recognized technology brand for high-quality development services.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <h2 className="font-semibold text-white">Values</h2>
            <p className="mt-2 text-slate-300">Transparency, agility, high standards, and long-term value for clients.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
