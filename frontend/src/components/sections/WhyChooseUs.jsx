import { CalendarCheck, Handshake, Zap, Sparkles, Smile } from "lucide-react";
import { WHY_CHOOSE, SITE } from "../../lib/site";

const ICONS = { CalendarCheck, Handshake, Zap, Sparkles, Smile };

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "var(--lc-green)" }}
    >
      <div className="lc-grain" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--lc-gold)]/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--lc-gold)]/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="lc-divider mb-6" />
          <h2
            className="font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
            data-testid="why-heading"
          >
            Why Homeowners
            <span className="block italic text-[var(--lc-gold)] font-normal">
              Choose LC Gardeners.
            </span>
          </h2>
          <p className="mt-6 text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            We're not the cheapest. We're the team you can count on — and that's what keeps
            customers with us, year after year.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--lc-gold)]/20 rounded-sm overflow-hidden">
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                data-testid={`why-item-${idx}`}
                className="p-8 lg:p-10 transition-colors duration-300 hover:bg-[var(--lc-green-deep)]"
                style={{ backgroundColor: "var(--lc-green)" }}
              >
                <div
                  className="h-12 w-12 rounded-sm flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(200,164,77,0.14)" }}
                >
                  <Icon className="h-5 w-5 text-[var(--lc-gold)]" />
                </div>
                <h3 className="font-display text-xl text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-white/10 pt-10">
          <p className="font-display text-2xl text-white max-w-xl leading-snug">
            “You don't need to worry about your yard anymore.”
          </p>
          <a
            href={SITE.phoneHref}
            data-testid="why-call-btn"
            className="lc-btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide whitespace-nowrap"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
