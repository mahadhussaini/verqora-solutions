import { notFound } from 'next/navigation';
import Link from 'next/link';

type Project = {
  slug: string;
  title: string;
  description: string;
  details: string[];
  results: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    slug: 'weather-application',
    title: 'Weather Application',
    description: 'Real-time weather dashboard for accurate forecasts and alerts.',
    details: [
      'Built with Next.js, TailwindCSS, TypeScript',
      'fetches weather data from OpenWeather API with caching',
      'progressive loading, mobile/desktop optimized',
    ],
    results: ['12% uplift in engagement', '2-sec TTFB on modern networks', '95% lighthouse score'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API routes', 'SSR']
  },
  {
    slug: 'resume-builder',
    title: 'Resume Builder',
    description: 'Dynamic resume builder with PDF export and profile sharing.',
    details: [
      'Interactive step-by-step form and data model validation',
      'PDF generation with client-side rendering and responsive templates',
      'Profile sharing via unique URL and cloud save',
    ],
    results: ['80% user retention after onboarding', '5x weekly share rate', 'instant export capability'],
    tech: ['React', 'Next.js', 'Zod', 'html2canvas', 'Serverless API'],
  },
  {
    slug: 'landing-page-suite',
    title: 'Landing Page Suite',
    description: 'High-conversion marketing landing pages with analytics integration.',
    details: [
      'Multiple template library with quick brand customization',
      'Form capture + conversion pixel support',
      'SEO and performance-first architecture',
    ],
    results: ['20% conversion lift', '55% reduction in load times', '2.4 A/B improvement'],
    tech: ['Next.js', 'Redux', 'TypeScript', 'Vercel', 'Google Analytics'],
  },
];

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find(item => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-950/80 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/portfolio" className="text-sm text-brand-300 hover:underline">
          &larr; Back to Portfolio
        </Link>
        <h1 className="mt-3 text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-slate-300">{project.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
            <h2 className="text-xl font-semibold">Project highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
            <h2 className="text-xl font-semibold">Results</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {project.results.map((result, index) => <li key={index}>{result}</li>)}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 md:col-span-2">
            <h2 className="text-xl font-semibold">Tech stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="rounded-full bg-brand-500/20 px-3 py-1 text-sm text-brand-100">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
