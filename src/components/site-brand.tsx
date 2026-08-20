import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact airflow/isobar lockup drawn in SVG; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="klimajob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <path className="site-brand__isobar" d="M6 15c9-8 27-8 36 0M4 24c11-7 29-7 40 0M8 33c8-5 24-5 32 0" />
        <path className="site-brand__air" d="M13 10v28M13 38l-4-5M13 38l4-5" />
        <circle className="site-brand__node" cx="35" cy="24" r="3" />
      </svg>
      <span className="site-brand__type">
        <strong>klima</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}
