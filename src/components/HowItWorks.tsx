const steps = [
  { num: "1", title: "Choose your sign type" },
  { num: "2", title: "Submit your MTA licence number and contact details via the order form" },
  { num: "3", title: "We produce and deliver within 3 working days" },
  { num: "4", title: "Fix to your entrance — done. You're compliant." },
];

const HowItWorks = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center mb-12 text-foreground">How It Works</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-lg font-bold font-sans mx-auto mb-4">
              {s.num}
            </div>
            <p className="text-sm text-foreground leading-relaxed">{s.title}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
