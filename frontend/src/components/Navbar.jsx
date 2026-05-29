import { useEffect, useState } from "react";
import { Phone, Leaf } from "lucide-react";
import { SITE } from "../lib/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--lc-line)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-center gap-2.5 group"
        >
          <span
            className={`h-9 w-9 rounded-sm flex items-center justify-center transition-colors ${
              scrolled ? "bg-[var(--lc-green)]" : "bg-[var(--lc-gold)]"
            }`}
          >
            <Leaf className={`h-5 w-5 ${scrolled ? "text-[var(--lc-gold)]" : "text-[var(--lc-green)]"}`} />
          </span>
          <span
            className={`font-display text-xl tracking-tight ${
              scrolled ? "text-[var(--lc-green)]" : "text-white"
            }`}
          >
            LC Gardeners
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {[
            { label: "Services", href: "#services" },
            { label: "Why Us", href: "#why" },
            { label: "Our Work", href: "#work" },
            { label: "Owner", href: "#owner" },
            { label: "Reviews", href: "#reviews" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-[var(--lc-charcoal)] hover:text-[var(--lc-green)]"
                  : "text-white/90 hover:text-[var(--lc-gold)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          data-testid="navbar-call-btn"
          className="lc-btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{SITE.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
};
