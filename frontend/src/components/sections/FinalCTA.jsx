import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, IMAGES } from "../../lib/site";

export const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,42,30,0.97) 0%, rgba(30,58,42,0.92) 100%)",
          }}
        />
      </div>
      <div className="lc-grain absolute inset-0" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="lc-divider mb-7" />
        <h2
          className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          data-testid="final-cta-heading"
        >
          Ready To Transform
          <span className="block italic text-[var(--lc-gold)] font-normal">
            Your Yard?
          </span>
        </h2>
        <p className="mt-7 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Get a free estimate and see why homeowners across Vancouver, WA continue to trust LC
          Gardeners year after year.
        </p>

        <div className="mt-10">
          <a
            href={SITE.phoneHref}
            data-testid="final-cta-call-btn"
            className="lc-btn-gold inline-flex items-center gap-3 px-9 py-5 rounded-sm text-base font-semibold tracking-wide"
          >
            <Phone className="h-5 w-5" />
            Call Now — {SITE.phone}
          </a>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/75 text-sm">
          <a
            href={SITE.emailHref}
            data-testid="final-cta-email"
            className="inline-flex items-center gap-2 hover:text-[var(--lc-gold)] transition-colors"
          >
            <Mail className="h-4 w-4 text-[var(--lc-gold)]" />
            {SITE.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--lc-gold)]" />
            {SITE.serviceArea}
          </span>
        </div>
      </div>
    </section>
  );
};
