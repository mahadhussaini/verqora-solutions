export const metadata = {
  title: 'Verqora | Services',
  description: 'Explore Verqora services for web, frontend, backend and optimization.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Designed for conversion, speed, and accessibility across devices.',
      features: ['Responsive UI', 'Static & dynamic content', 'SEO-driven structure'],
    },
    {
      title: 'Frontend Development',
      description: 'Pixel-perfect UI with clean architecture and maintainable state.',
      features: ['React/Next.js', 'Performance budgets', 'UI component libraries'],
    },
    {
      title: 'Backend Development',
      description: 'APIs, data models, and business logic built for security and scale.',
      features: ['REST/GraphQL', 'DB design', 'Authentication & authorization'],
    },
    {
      title: 'DevOps & Hosting',
      description: 'Infrastructure setup, deployment automation, and monitoring.',
      features: ['Cloud architecture', 'CI/CD pipelines', 'Logging/observability'],
    },
    {
      title: 'Product Strategy',
      description: 'Product planning, MVP definition and iterative delivery guidance.',
      features: ['Roadmapping', 'Feature prioritization', 'User testing feedback'],
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and continuous improvement cycles.',
      features: ['Bug triage', 'Performance audits', 'Feature upgrades'],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 text-lg text-slate-300">Our full-service technology offering for businesses.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <article key={service.title} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-2 text-slate-300">{service.description}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {service.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-brand-500/40 bg-brand-500/10 p-6 text-center">
          <h3 className="text-2xl font-semibold text-white">Start Your Project With Us</h3>
          <p className="mt-2 text-slate-300">Describe your business challenge, and we’ll propose a roadmap with a detailed timeline and transparent costs.</p>
          <a href="/contact" className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-2 font-semibold text-white hover:bg-brand-400">Request a Proposal</a>
        </div>
      </section>
    </main>
  );
}
