import Link from "next/link";
import { IconArrow } from "@/components/AqIcons";
export default function CallToAction() {
  return <div className="aq-panel"><div className="aq-panel-head"><div><div className="title">Siguiente paso</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 42, lineHeight: 1, marginTop: 6 }}>¿TU OPERACIÓN YA REBASÓ SUS SISTEMAS?</div></div><div className="aq-live"><span className="aq-live-dot"/>SELECTIVO</div></div><p className="aq-section-lead">Si ya sabes qué necesitas resolver, empecemos con un diagnóstico pagado de 30–40 horas y una ruta clara antes de cotizar implementación.</p><Link href="/#contacto" className="aq-btn aq-btn-primary" style={{ marginTop: 24 }}>Plantea tu reto <IconArrow size={14}/></Link></div>;
}
