import { Check, Star } from "lucide-react";
import signPhoto from "@/assets/sign-photo.png";

const tiers = [
  {
    name: "Basic",
    price: "€29",
    description: "Weatherproof acrylic panel. You provide the details, we print.",
    features: ["Weatherproof acrylic", "Custom printed", "MTA compliant"],
    popular: false,
    image: null,
  },
  {
    name: "Standard",
    price: "€59",
    description: "Aluminium composite panel, fully personalised with your licence number and contact details printed on. Includes fixings.",
    features: ["Aluminium composite", "Fully personalised", "Fixings included", "MTA compliant"],
    popular: true,
    image: null,
  },
  {
    name: "Premium",
    price: "€120",
    description: "Brushed aluminium, laser engraved. For villas and luxury properties.",
    features: ["Brushed aluminium", "Laser engraved", "Premium finish", "MTA compliant"],
    popular: false,
    image: signPhoto,
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
                <img src={t.image} alt={`${t.name} sign`} className="w-full h-full object-cover" />
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
        Installation available across Malta — €45 per property
      </p>
    </div>
  </section>
);

export default Product;
