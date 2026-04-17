import logo from "@/assets/signready-logo-gold.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6">
    <div className="max-w-5xl mx-auto text-center space-y-4">
      <img src={logo} alt="SignReady" className="w-[140px] h-auto mx-auto" />
      <p className="text-sm text-primary-foreground/70">
        <a href="mailto:signreadymalta@gmail.com" className="hover:text-gold transition-colors">signreadymalta@gmail.com</a>
      </p>
      <p className="text-xs text-primary-foreground/50 max-w-xl mx-auto leading-relaxed">
        We are not affiliated with the Malta Tourism Authority. This product helps operators meet the signage requirement under the Tourism Accommodation Regulations 2026.
      </p>
    </div>
  </footer>
);

export default Footer;
