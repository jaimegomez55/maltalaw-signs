import { Shield } from "lucide-react";
import signPhoto from "@/assets/sign-photo.png";

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={signPhoto} alt="MTA compliance sign on Malta limestone wall" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-20 md:py-32">
        <div className="inline-flex items-center gap-2 bg-secondary/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Shield className="w-4 h-4" />
          New regulation — June 2026
        </div>
        <h1 className="text-3xl md:text-5xl leading-tight mb-6 text-primary-foreground">
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
          Serving short-let owners across Malta and Gozo.
        </p>
      </div>
    </section>
  );
};

export default Hero;
