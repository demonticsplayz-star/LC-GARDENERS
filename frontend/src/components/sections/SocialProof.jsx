import { Award, Clock, CheckCircle2, HeartHandshake } from "lucide-react";
import { SOCIAL_PROOF_HIGHLIGHTS } from "../../lib/site";

const ICONS = { Award, Clock, CheckCircle2, HeartHandshake };

export const SocialProof = () => {
  return (
    <section
      data-testid="social-proof-section"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="lc-divider mb-6" />
          <h2
            className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
            data-testid="social-proof-heading"
          >
            The Landscaping Company
            <span className="block italic text-[var(--lc-gold)] font-normal">
              Homeowners Keep Calling Back.
            </span>
          </h2>
          <p className="mt-6 text-[var(--lc-charcoal)]/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            We've earned our reputation one driveway at a time — through consistent quality,
            honest scheduling, and a team that genuinely cares.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_PROOF_HIGHLIGHTS.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                data-testid={`social-proof-card-${idx}`}
                className="group bg-[var(--lc-warm)] p-8 rounded-sm border border-transparent hover:border-[var(--lc-gold)]/40 transition-all duration-300"
              >
                <div
                  className="h-11 w-11 rounded-sm flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(30, 58, 42, 0.08)" }}
                >
                  <Icon className="h-5 w-5 text-[var(--lc-green)]" />
                </div>
                <h3 className="font-display text-xl text-[var(--lc-green)] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--lc-charcoal)]/70 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
