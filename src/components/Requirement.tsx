import { Scale, CalendarClock, FileText } from "lucide-react";

const cards = [
  {
    icon: Scale,
    title: "What the law says",
    text: "Every short-let must display a sign outside the property entrance with the MTA licence number and 24/7 contact details.",
  },
  {
    icon: CalendarClock,
    title: "The deadline",
    text: "June 2026. Operating without a valid licence risks a 3-year disqualification.",
  },
  {
    icon: FileText,
    title: "What your sign must show",
    text: "MTA licence number, contact person name, contact phone number.",
  },
];

const Requirement = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center mb-12 text-foreground">Malta short let sign requirement — Tourism Accommodation Regulations 2026</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-card border border-border rounded-lg p-8">
            <c.icon className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-lg mb-3 text-foreground">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Requirement;
