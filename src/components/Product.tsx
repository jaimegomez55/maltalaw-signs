import { Check, Star } from "lucide-react";
import signBasic from "@/assets/sign-basic.png";
import signStandard from "@/assets/sign-standard.png";
import signPremium from "@/assets/sign-premium.png";

const tiers = [
  {
    name: "Basic",
    price: "€39",
    description: "PVC panel, printed and ready to fix. Fully compliant with the 2026 MTA signage requirement.",
    features: ["Printed PVC panel", "Flat wall mount", "MTA compliant", "Includes fixings"],
    popular: false,
    image: signBasic,
    imageAlt: "Basic acrylic MTA licence sign for Malta short let",
  },
  {
    name: "Standard",
    price: "€59",
    description: "Aluminium composite panel with stainless steel stand-offs. Professional finish, fully personalised with your details printed on.",
    features: ["Aluminium composite panel", "Stainless steel stand-offs", "Fully personalised", "Weatherproof", "MTA compliant", "Includes fixings"],
    popular: true,
    image: signStandard,
    imageAlt: "Standard aluminium MTA licence sign for Malta holiday premises",
  },
  {
    name: "Premium",
    price: "€89",
    description: "Brushed silver aluminium composite with premium stand-offs. The most professional finish available for your property entrance.",
    features: ["Brushed silver aluminium composite", "Premium polished stand-offs", "Fully personalised", "Weatherproof", "Premium finish", "MTA compliant", "Includes fixings"],
    popular: false,
    image: signPremium,
    imageAlt: "Premium laser engraved MTA licence sign Malta",
  },
];

const Product = () => (
  <section className="py-20 px-6 bg-muted">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center mb-12 text-foreground">The Product</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-lg overflow-hidden border-2 ${
              t.popular
                ? "bg-primary text-primary-foreground border-secondary"
                : "bg-background text-foreground border-border"
            }`}
          >
            {t.image && (
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.imageAlt} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              {t.popular && (
                <div className="flex items-center gap-1.5 text-gold text-sm font-semibold mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              <h3 className="text-xl mb-1">{t.name}</h3>
              <p className="text-3xl font-bold font-sans mb-4">
                {t.price}
                <span className={`text-sm font-normal ml-1 ${t.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  from
                </span>
              </p>
              <p className={`text-sm leading-relaxed mb-6 ${t.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t.description}
              </p>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${t.popular ? "text-gold" : "text-secondary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-muted-foreground text-sm">
        Installation available across Malta and Gozo — €45 per property
      </p>
    </div>
  </section>
);

export default Product;
