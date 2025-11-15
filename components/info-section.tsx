export interface InfoSectionProps {
  title: string;
  items: string[];
}

export default function InfoSection({ title, items }: InfoSectionProps) {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-foreground mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
