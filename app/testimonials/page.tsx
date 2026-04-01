const testimonials = [
  { quote: 'Professional team delivering quality work with excellent communication.', author: 'Happy Client' },
  { quote: 'Highly recommended for modern web development projects.', author: 'Satisfied Customer' },
  { quote: 'Fast delivery and continuous support throughout the project.', author: 'Return Client' },
];

export const metadata = {
  title: 'Verqora | Testimonials',
  description: 'See what our clients say about Verqora.',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-slate-700 bg-slate-900/80 p-10 shadow-soft">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <p className="mt-4 text-lg text-slate-300">What our clients say about us.</p>

        <div className="mt-8 space-y-4">
          {testimonials.map((item, index) => (
            <blockquote key={index} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-slate-100">“{item.quote}”</p>
              <footer className="mt-3 text-sm text-slate-300">— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
