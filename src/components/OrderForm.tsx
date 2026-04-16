import { useState } from "react";

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    mtaLicence: "",
    contactName: "",
    contactPhone: "",
    tier: "Standard",
    installation: false,
    notes: "",
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="order-form" className="py-20 px-6 bg-muted">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-background border border-border rounded-lg p-12">
            <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-sans">
              ✓
            </div>
            <h2 className="text-2xl mb-4 text-foreground">Order received</h2>
            <p className="text-muted-foreground">
              We will be in touch within 24 hours to confirm and send payment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="order-form" className="py-20 px-6 bg-muted">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-12 text-foreground">Order Your Sign</h2>
        <form onSubmit={handleSubmit} className="bg-background border border-border rounded-lg p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full name</label>
              <input required className={inputClass} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Email address</label>
              <input required type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Phone number <span className="text-muted-foreground font-normal">(WhatsApp preferred)</span></label>
              <input required className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>MTA licence number</label>
              <input required className={inputClass} value={form.mtaLicence} onChange={(e) => update("mtaLicence", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Property address</label>
            <input required className={inputClass} value={form.propertyAddress} onChange={(e) => update("propertyAddress", e.target.value)} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Contact person name <span className="text-muted-foreground font-normal">(printed on sign)</span></label>
              <input required className={inputClass} value={form.contactName} onChange={(e) => update("contactName", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Contact phone number <span className="text-muted-foreground font-normal">(printed on sign)</span></label>
              <input required className={inputClass} value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Sign tier</label>
              <select className={inputClass} value={form.tier} onChange={(e) => update("tier", e.target.value)}>
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <button
                  type="button"
                  role="switch"
                  aria-checked={form.installation}
                  onClick={() => update("installation", !form.installation)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${form.installation ? "bg-secondary" : "bg-border"}`}
                >
                  <span className={`block w-5 h-5 rounded-full bg-background shadow transition-transform ${form.installation ? "translate-x-6" : "translate-x-1"} mt-1`} />
                </button>
                <span className="text-sm text-foreground">Installation needed (€45)</span>
              </label>
            </div>
          </div>
          <div>
            <label className={labelClass}>Notes <span className="text-muted-foreground font-normal">(optional)</span></label>
            <textarea rows={3} className={inputClass} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Place my order
          </button>
          <p className="text-center text-xs text-muted-foreground">
            We will confirm your order and send a payment link within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
