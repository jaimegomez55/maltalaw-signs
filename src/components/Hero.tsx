import { Shield } from "lucide-react";

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Shield className="w-4 h-4" />
          New regulation — June 2026
        </div>
        <h1 className="text-3xl md:text-5xl leading-tight mb-6">
          Is your short-let legally compliant from June 2026?
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          New MTA regulations require every short-let property in Malta to display a licence sign outside the entrance. We make them. Delivered in 3 days.
        </p>
        <button
          onClick={scrollToOrder}
          className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          Order your sign
        </button>
        <p className="mt-6 text-sm text-primary-foreground/60">
          Trusted by short-let owners across Malta
        </p>
      </div>
    </section>
  );
};

export default Hero;
