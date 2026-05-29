import { Quote } from "lucide-react";
import { REVIEWS } from "../../lib/site";
import { StarRow } from "../StarRow";

export const Reviews = () => {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="lc-divider mb-6" />
            <h2
              className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
              data-testid="reviews-heading"
            >
              What Homeowners
              <span className="italic text-[var(--lc-gold)] font-normal"> Say.</span>
            </h2>
          </div>

          <div
            className="bg-[var(--lc-warm)] rounded-sm px-7 py-5 flex items-center gap-5"
            data-testid="review-counter"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl text-[var(--lc-green)] leading-none">
                  5.0
                </span>
                <StarRow />
              </div>
              <p className="text-xs text-[var(--lc-charcoal)]/60 mt-1 tracking-wide">
                Based on local customer reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <article
              key={r.name}
              data-testid={`review-card-${idx}`}
              className="bg-[var(--lc-warm)] rounded-sm p-8 relative transition-all duration-300 hover:bg-white hover:border-[var(--lc-gold)]/40 border border-transparent"
            >
              <Quote className="h-7 w-7 text-[var(--lc-gold)] mb-5" />
              <StarRow className="mb-4" />
              <p className="text-[var(--lc-charcoal)]/85 text-base leading-relaxed">
                “{r.text}”
              </p>
              <div className="mt-7 pt-5 border-t border-[var(--lc-line)] flex items-center justify-between">
                <p className="font-display text-lg text-[var(--lc-green)]">— {r.name}</p>
                {r.real && (
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--lc-gold)] font-semibold">
                    Verified
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
