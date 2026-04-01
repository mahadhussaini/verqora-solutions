export const metadata = {
  title: 'Verqora | Services',
  description: 'Explore Verqora services for web, frontend, backend and optimization.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Fast, responsive, and professional websites.',
    },
    {
      title: 'Frontend Development',
      description: 'Modern UI/UX using React, Next.js, and latest frameworks.',
    },
    {
      title: 'Backend Development',
      description: 'Secure, scalable systems with APIs and databases.',
    },
    {
      title: 'Bug Fixing & Optimization',
      description: 'Improve performance and resolve issues in existing systems.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 text-lg text-slate-300">Our full-service technology offering for businesses.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => (
            <article key={service.title} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
