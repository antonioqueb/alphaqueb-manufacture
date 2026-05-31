import Link from "next/link";
import Image from "next/image";

export default function AqLogo({ href = "/", compact = false }) {
  const height = compact ? 32 : 40;
  return (
    <Link href={href} className="aq-brand" aria-label="Alphaqueb">
      <Image
        src="/alpha/alphalogo.png"
        alt="Alphaqueb"
        width={height * 5}
        height={height}
        sizes="180px"
        priority
        className="aq-brand-img"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
