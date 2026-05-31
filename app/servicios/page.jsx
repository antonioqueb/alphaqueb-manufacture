import Link from "next/link";
import { AqIcon, IconArrowUR } from "@/components/AqIcons";

const ITEMS = [
  { href: "/servicios/transformar", title: "Transformación Digital", desc: "ERP, MES, BI, automatización administrativa y arquitectura digital.", icon: "strategy" },
  { href: "/servicios/scada", title: "Sistemas SCADA", desc: "Supervisión, control, trazabilidad e integración con datos de planta.", icon: "plc" },
  { href: "/servicios/automatizar", title: "Automatización Industrial", desc: "PLC, robótica, monitoreo inteligente y reducción de costos operativos.", icon: "bot" },
];

export const metadata = { title: "Servicios | Alphaqueb" };
export default function ServiciosPage() {
  return <section className="aq-section"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Servicios</span><div><h1 className="aq-section-title">Rutas de implementación <span className="accent">industrial</span>.</h1><p className="aq-section-lead">Tres líneas de servicio para transformar operación, automatización e inteligencia de planta.</p></div></div><div className="aq-grid-3">{ITEMS.map((item, index) => <Link key={item.href} href={item.href} className="aq-card"><div className="aq-card-num">{String(index + 1).padStart(2, "0")}/03</div><div className="aq-card-icon"><AqIcon name={item.icon} size={32}/></div><h2 className="aq-card-title">{item.title}</h2><p className="aq-card-desc">{item.desc}</p><div className="aq-card-arrow"><IconArrowUR size={20}/></div></Link>)}</div></div></section>;
}
