import { Star } from "lucide-react";

export const StarRow = ({ count = 5, className = "" }) => (
  <div className={`inline-flex items-center gap-1 ${className}`} data-testid="star-row">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="h-4 w-4"
        style={{ fill: "#C8A44D", color: "#C8A44D" }}
      />
    ))}
  </div>
);
