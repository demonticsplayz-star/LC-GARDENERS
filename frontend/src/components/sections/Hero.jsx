import { Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE, IMAGES } from "../../lib/site";
import { StarRow } from "../StarRow";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] w-full flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxury manicured backyard at golden hour"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,42,30,0.55) 0%, rgba(20,42,30,0.25) 35%, rgba(20,42,30,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-16 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-7" data-testid="hero-eyebrow">
              <span className="h-px w-10 bg-[var(--lc-gold)]" />
              <span className="text-[var(--lc-gold)] text-xs tracking-[0.32em] font-semibold uppercase">
                Vancouver, WA · Family Owned
              </span>
            </div>

            <h1
              className="font-display text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight"
              data-testid="hero-heading"
            >
              Your Property Deserves
              <span className="block italic text-[var(--lc-gold)] font-normal">
                Better Landscaping.
              </span>
            </h1>

            <p
              className="mt-7 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed"
              data-testid="hero-subheading"
            >
              For years, homeowners have trusted LC Gardeners for dependable lawn care, yard
              cleanups, pruning, mulch, and full outdoor transformations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SITE.phoneHref}
                data-testid="hero-call-btn"
                className="lc-btn-gold inline-flex items-center gap-2.5 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </a>
              <a
                href="#services"
                data-testid="hero-services-btn"
                className="lc-btn-outline inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="relative border-t border-white/15 bg-[var(--lc-green)]/85 backdrop-blur-sm"
          data-testid="hero-trust-bar"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-y-4 gap-x-10">
            <div className="flex items-center gap-3">
              <StarRow />
              <span className="text-white/90 text-sm font-medium">
                Trusted by Local Homeowners
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4 text-[var(--lc-gold)]" />
              <span>{SITE.serviceArea}</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase text-white/70">
              <span>Fast</span>
              <span className="h-1 w-1 rounded-full bg-[var(--lc-gold)]" />
              <span>Professional</span>
              <span className="h-1 w-1 rounded-full bg-[var(--lc-gold)]" />
              <span>Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
