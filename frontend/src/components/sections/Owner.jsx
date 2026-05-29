import { Phone, Quote } from "lucide-react";
import { SITE } from "../../lib/site";

export const Owner = () => {
  return (
    <section
      id="owner"
      data-testid="owner-section"
      className="bg-[var(--lc-warm)] py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="lc-divider mb-7 inline-block" />
        <h2
          className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
          data-testid="owner-heading"
        >
          Meet The
          <span className="italic text-[var(--lc-gold)] font-normal"> Owner.</span>
        </h2>

        <div className="mt-10 max-w-3xl mx-auto">
          <Quote className="h-8 w-8 text-[var(--lc-gold)] mx-auto mb-6" />
          <div className="space-y-5 text-[var(--lc-charcoal)]/85 text-base sm:text-lg leading-relaxed">
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

          <p
            className="mt-10 font-display text-2xl sm:text-3xl text-[var(--lc-green)] italic leading-snug max-w-2xl mx-auto"
            data-testid="owner-signature"
          >
            — {SITE.ownerName}, Owner
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href={SITE.phoneHref}
              data-testid="owner-call-btn"
              className="lc-btn-green inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide"
            >
              <Phone className="h-4 w-4" />
              Talk to {SITE.ownerName} — {SITE.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--lc-gold)] font-semibold">
            <span className="h-px w-8 bg-[var(--lc-gold)]/50" />
            Family Owned · Locally Trusted
            <span className="h-px w-8 bg-[var(--lc-gold)]/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
