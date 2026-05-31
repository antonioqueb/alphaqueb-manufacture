import Link from "next/link";
import AqLogo from "@/components/AqLogo";

const POLICIES = [
  ["/aviso-de-privacidad", "Aviso de privacidad"],
  ["/terminos-y-condiciones", "Términos y condiciones"],
  ["/politica-de-seguridad", "Política de seguridad"],
  ["/politica-de-coockies", "Política de cookies"],
];

export default function Footer() {
  return (
    <footer className="aq-footer">
      <div className="aq-wrap">
        <div className="aq-foot-grid">
          <div className="aq-foot-brand">
            <AqLogo />
            <p>Consultoría estratégica para los retos más exigentes de la industria mexicana. Manufactura compleja, comercio internacional, eventos masivos y cumplimiento ambiental. Datos que informan. Estrategias que transforman.</p>
          </div>
          <div className="aq-foot-col"><h4>Verticales</h4><ul><li><Link href="/#verticales">Manufactura compleja</Link></li><li><Link href="/#verticales">Comercio internacional</Link></li><li><Link href="/#verticales">Eventos masivos</Link></li><li><Link href="/#verticales">Cumplimiento ambiental</Link></li></ul></div>
          <div className="aq-foot-col"><h4>Empresa</h4><ul><li><Link href="/#enfoque">Enfoque</Link></li><li><Link href="/#casos">Casos</Link></li><li><Link href="/#valores">Valores</Link></li><li><Link href="/blogs">Insights</Link></li><li><Link href="/#contacto">Contacto</Link></li></ul></div>
          <div className="aq-foot-col"><h4>Legal</h4><ul>{POLICIES.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
        </div>
        <div className="aq-foot-bar"><span>© 2026 Alphaqueb · Hecho en México</span><span>Aviso de privacidad · Términos</span><span style={{ color: "var(--aq-lime)" }}>● Sistema operativo · v2.6</span></div>
      </div>
    </footer>
  );
}
