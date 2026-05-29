import { Phone, Quote } from "lucide-react";
import { SITE, IMAGES } from "../../lib/site";

export const Owner = () => {
  return (
    <section
      id="owner"
      data-testid="owner-section"
      className="bg-[var(--lc-warm)] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative">
            <div className="lc-img-frame rounded-sm overflow-hidden border border-[var(--lc-line)] aspect-[4/5] max-w-md">
              <img
                src={IMAGES.owner}
                alt={`${SITE.ownerName}, owner of LC Gardeners`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[var(--lc-green)] text-white px-6 py-4 rounded-sm shadow-xl"
              data-testid="owner-badge"
            >
              <Quote className="h-5 w-5 text-[var(--lc-gold)]" />
              <div>
                <p className="font-display text-base leading-tight">Family Owned</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--lc-gold)]">
                  Local · Trusted
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="lc-divider mb-6" />
          <h2
            className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
            data-testid="owner-heading"
          >
            Meet The
            <span className="italic text-[var(--lc-gold)] font-normal"> Owner.</span>
          </h2>

          <div className="mt-8 space-y-5 text-[var(--lc-charcoal)]/80 text-base sm:text-lg leading-relaxed">
            <p>
              My name is <span className="text-[var(--lc-green)] font-semibold">{SITE.ownerName}</span>,
              and I started LC Gardeners with a simple goal: provide reliable landscaping services
              that homeowners can actually count on.
            </p>
            <p>
              We believe in showing up on time, doing quality work, and treating every property
              with the care we'd give our own. Many of our customers have trusted us for years —
              and we're grateful to keep helping homeowners make their yards look their best.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SITE.phoneHref}
              data-testid="owner-call-btn"
              className="lc-btn-green inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide"
            >
              <Phone className="h-4 w-4" />
              Talk to {SITE.ownerName} — {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
