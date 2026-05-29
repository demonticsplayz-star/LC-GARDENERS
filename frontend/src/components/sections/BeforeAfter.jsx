import { IMAGES } from "../../lib/site";

const PROJECTS = [
  {
    image: IMAGES.beforeAfter1,
    title: "Front Yard Reset",
    detail: "Overgrown beds → clean lines, fresh mulch, and crisp edges.",
  },
  {
    image: IMAGES.beforeAfter2,
    title: "Backyard Transformation",
    detail: "Tired turf and brush cleared for a usable, manicured space.",
  },
  {
    image: IMAGES.serviceProperty,
    title: "Full Property Refresh",
    detail: "Hedges shaped, lawns leveled, and the whole property elevated.",
  },
];

export const BeforeAfter = () => {
  return (
    <section
      id="work"
      data-testid="work-section"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="lc-divider mb-6" />
            <h2
              className="font-display text-[var(--lc-green)] text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
              data-testid="work-heading"
            >
              See The
              <span className="italic text-[var(--lc-gold)] font-normal"> Difference.</span>
            </h2>
          </div>
          <p className="text-[var(--lc-charcoal)]/70 lg:text-right max-w-md text-base leading-relaxed">
            Real properties. Real crews. Real results — from neglected lots to landscapes that
            stop traffic on the street.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <figure
              key={p.title}
              data-testid={`work-card-${idx}`}
              className="group relative rounded-sm overflow-hidden border border-[var(--lc-line)]"
            >
              <div className="lc-img-frame h-[420px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute inset-x-0 bottom-0 p-6"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(20,42,30,0.92) 0%, rgba(20,42,30,0) 100%)",
                }}
              >
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-[10px] tracking-[0.3em] text-[var(--lc-gold)] uppercase font-semibold">
                    Before · After
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-white/80 mt-2 max-w-sm leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
