import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "../../lib/site";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-[var(--lc-charcoal)] text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-sm bg-[var(--lc-gold)] flex items-center justify-center">
                <Leaf className="h-5 w-5 text-[var(--lc-green)]" />
              </span>
              <span className="font-display text-2xl text-white tracking-tight">
                LC Gardeners
              </span>
            </div>
            <p className="mt-5 text-white/65 text-sm leading-relaxed max-w-sm font-display italic text-lg">
              Beautiful Landscapes. Reliable Service. Every Time.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--lc-gold)] font-semibold mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  data-testid="footer-phone"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-[var(--lc-gold)] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[var(--lc-gold)]" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  data-testid="footer-email"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-[var(--lc-gold)] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-[var(--lc-gold)] shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-white/85">
                <MapPin className="h-4 w-4 text-[var(--lc-gold)] mt-0.5 shrink-0" />
                <span>{SITE.serviceArea}</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--lc-gold)] font-semibold mb-5">
              Site
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-white/85 hover:text-[var(--lc-gold)] transition-colors">Services</a></li>
              <li><a href="#why" className="text-white/85 hover:text-[var(--lc-gold)] transition-colors">Why Us</a></li>
              <li><a href="#work" className="text-white/85 hover:text-[var(--lc-gold)] transition-colors">Our Work</a></li>
              <li><a href="#owner" className="text-white/85 hover:text-[var(--lc-gold)] transition-colors">Owner</a></li>
              <li><a href="#reviews" className="text-white/85 hover:text-[var(--lc-gold)] transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--lc-gold)] font-semibold mb-5">
              Hours
            </p>
            <ul className="space-y-2 text-sm text-white/85">
              <li>Mon — Fri</li>
              <li className="text-white/60">7:00 AM — 6:00 PM</li>
              <li className="pt-2">Sat</li>
              <li className="text-white/60">By Appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55 tracking-wide">
            © {new Date().getFullYear()} LC Gardeners. All rights reserved.
          </p>
          <p className="text-xs text-white/55 tracking-[0.2em] uppercase">
            Family Owned · Locally Trusted
          </p>
        </div>
      </div>
    </footer>
  );
};
