export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container py-12 md:py-16">
      <h2 className="section-title">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
