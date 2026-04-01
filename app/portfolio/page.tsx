import Link from 'next/link';

const projects = [
  {
    slug: 'weather-application',
    title: 'Weather Application',
    description: 'Real-time weather app with modern frontend architecture and API orchestration.',
    bullets: ['React + Next.js UI', 'OpenWeather API integration', 'Responsive dashboard'],
  },
  {
    slug: 'resume-builder',
    title: 'Resume Builder',
    description: 'Dynamic resume generation with PDF export in a polished, responsive web app.',
    bullets: ['Form state flow', 'PDF download', 'Drag-and-drop sections'],
  },
  {
    slug: 'landing-page-suite',
    title: 'Landing Page Suite',
    description: 'Conversion-optimized landing page templates for business services and campaigns.',
    bullets: ['A/B copy variants', 'SEO metadata', 'Fast loading, WT',],
  },
];

export const metadata = {
  title: 'Verqora | Portfolio',
  description: 'Explore Verqora portfolio with case studies, project details, and technology insights.',
};

export default function PortfolioPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-950/75 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-3 text-lg text-slate-300">
          Explore our selected projects with case details, technology strategy, and measurable outcomes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <article key={project.slug} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-brand-400">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-slate-300">{project.description}</p>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                {project.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <Link href={`/portfolio/${project.slug}`} className="mt-5 inline-block rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
                View Case Study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
