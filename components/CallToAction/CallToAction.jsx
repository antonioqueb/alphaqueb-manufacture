import Link from "next/link";
import { IconArrow } from "@/components/AqIcons";
export default function CallToAction() {
  return <div className="aq-panel"><div className="aq-panel-head"><div><div className="title">Siguiente paso</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 42, lineHeight: 1, marginTop: 6 }}>LISTO PARA IMPULSAR TU MANUFACTURA?</div></div><div className="aq-live"><span className="aq-live-dot"/>DISPONIBLE</div></div><p className="aq-section-lead">Transformamos la manufactura mexicana con soluciones tecnológicas accionables.</p><Link href="/#contacto" className="aq-btn aq-btn-primary" style={{ marginTop: 24 }}>Contáctanos <IconArrow size={14}/></Link></div>;
}
