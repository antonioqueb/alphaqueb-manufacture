import Link from "next/link";

export default function AqLogo({ href = "/", compact = false }) {
  return (
    <Link href={href} className="aq-brand" aria-label="Alphaqueb">
      <span className="aq-brand-mark">AQ</span>
      {!compact && <span className="aq-brand-word">ALPHAQUEB</span>}
    </Link>
  );
}
