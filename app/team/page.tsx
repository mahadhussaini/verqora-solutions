const team = [
  {
    name: 'Asad Arshad',
    role: 'Software Developer (Application Development & Problem Solving)',
    linkedin: 'https://www.linkedin.com/in/asad-arshad-80a6b9196',
  },
  {
    name: 'Mahad Arshad',
    role: 'Full Stack Developer (Web Applications | System Development)',
    linkedin: 'https://www.linkedin.com/in/mahad-arshad',
  },
  {
    name: 'Hassan Ahmed Siddiqui',
    role: 'Frontend Developer (React | TypeScript | JavaScript)',
    linkedin: 'https://www.linkedin.com/in/hassan-ahmed-siddiqui2728',
  },
  {
    name: 'Sarmad Arshad',
    role: 'Backend Developer (APIs | Databases | Server Development)',
    linkedin: 'https://www.linkedin.com/in/syedsarmadarshad',
  },
  {
    name: 'Sufiyan Imran',
    role: 'Frontend Developer (UI Development | Responsive Design)',
    linkedin: 'https://www.linkedin.com/in/sufiyanimran',
  },
  {
    name: 'Areeb Ahmed Siddiqui',
    role: 'UI/UX Designer (Creative Interfaces & User Experience)',
    linkedin: 'https://www.linkedin.com/in/areebahmedsiddiqui08',
  },
];

export const metadata = {
  title: 'Verqora | Our Team',
  description: 'Meet the talented Verqora development team.',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="mt-4 text-lg text-slate-300">A dedicated team of developers, designers, and engineers.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {team.map(member => (
            <article key={member.name} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-slate-300">{member.role}</p>
              <p className="mt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-300 hover:text-brand-200"
                >
                  LinkedIn Profile
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
