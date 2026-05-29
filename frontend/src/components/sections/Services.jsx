import { ArrowUpRight } from "lucide-react";
import { SERVICES, SITE } from "../../lib/site";

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="bg-[var(--lc-warm)] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="lc-divider mb-6" />
            <h2
              className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
              data-testid="services-heading"
            >
              Services Built Around
              <span className="block italic text-[var(--lc-gold)] font-normal">
                Your Property.
              </span>
            </h2>
          </div>
          <p className="text-[var(--lc-charcoal)]/70 text-base lg:text-right max-w-md leading-relaxed">
            From weekly lawn care to full property transformations — every service is delivered
            with the same standard of detail and dependability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              data-testid={`service-card-${service.id}`}
              className="group bg-white rounded-sm overflow-hidden border border-[var(--lc-line)] hover:border-[var(--lc-gold)]/60 transition-all duration-300"
            >
              <div className="lc-img-frame h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-[var(--lc-green)] leading-tight">
                    {service.title}
                  </h3>
                  <span className="h-9 w-9 flex items-center justify-center rounded-sm bg-[var(--lc-warm)] group-hover:bg-[var(--lc-gold)] transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-[var(--lc-green)]" />
                  </span>
                </div>
                <p className="mt-4 text-sm text-[var(--lc-charcoal)]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[var(--lc-charcoal)]/60 text-sm mb-5 tracking-wide">
            Don't see what you need? We probably do it.
          </p>
          <a
            href={SITE.phoneHref}
            data-testid="services-call-btn"
            className="lc-btn-green inline-flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold tracking-wide"
          >
            Call for a Free Estimate — {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
