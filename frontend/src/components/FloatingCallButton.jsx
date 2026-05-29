import { Phone } from "lucide-react";
import { SITE } from "../lib/site";

export const FloatingCallButton = () => (
  <a
    href={SITE.phoneHref}
    data-testid="floating-call-btn"
    aria-label={`Call ${SITE.name}`}
    className="md:hidden fixed z-50 bottom-6 left-6 lc-btn-gold rounded-full h-14 w-14 flex items-center justify-center shadow-2xl"
    style={{ boxShadow: "0 10px 30px -10px rgba(200,164,77,0.7)" }}
  >
    <Phone className="h-6 w-6" />
  </a>
);
