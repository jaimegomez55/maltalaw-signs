import logo from "@/assets/signready-logo-light.png";

const Navbar = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-background py-3 px-6 flex items-center justify-between">
      <img src={logo} alt="SignReady" className="w-[140px] h-auto" />
      <button
        onClick={scrollToOrder}
        className="bg-secondary text-secondary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
      >
        Order now
      </button>
    </nav>
  );
};

export default Navbar;
