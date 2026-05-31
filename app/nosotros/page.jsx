import ContactSection from "@/components/ContactSection";
import { AqIcon } from "@/components/AqIcons";

const values = [
  ["Enfoque en manufactura", "Dominamos procesos industriales, integración de sistemas y optimización operativa.", "factory"],
  ["Atención personalizada", "Nos adaptamos a necesidades reales con cercanía ejecutiva y técnica.", "users"],
  ["Alcance global", "Operamos desde México con capacidad de acompañar operaciones distribuidas.", "globe"],
  ["Confidencialidad", "Protegemos información, procesos, datos y propiedad intelectual del cliente.", "shield"],
  ["Escalabilidad", "Creamos sistemas robustos, modulares y preparados para crecer.", "database"],
  ["Precisión", "Entendemos tus procesos antes de proponer soluciones.", "target"],
];

export default function Nosotros() {
  return <><section className="aq-service-hero"><div className="aq-wrap"><div className="aq-service-grid"><div><div className="aq-eyebrow">Nosotros · Alphaqueb</div><h1 className="aq-service-title"><span>Impulsamos</span> la manufactura con tecnología de vanguardia</h1><p className="aq-service-sub">Transformamos la manufactura a través de innovación tecnológica. No solo ofrecemos soluciones; construimos sistemas operativos para empresas que necesitan control, datos y resultados.</p></div><div className="aq-panel"><span className="aq-panel-tag">Recorrido</span><div className="aq-panel-head"><div><div className="title">Desde 2017</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 36, lineHeight: 1, marginTop: 6 }}>INGENIERÍA + NEGOCIO</div></div><div className="aq-live"><span className="aq-live-dot" />ACTIVO</div></div><p className="aq-section-lead">Nuestra evolución hacia Alphaqueb Consulting SAS refleja un compromiso con excelencia, innovación constante y ejecución técnica aplicada a operaciones reales.</p></div></div></div></section><section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Valores</span><div><h2 className="aq-section-title">Cómo construimos <span className="accent">confianza</span>.</h2><p className="aq-section-lead">Principios operativos para cada decisión técnica y cada entregable.</p></div></div><div className="aq-grid-3">{values.map(([title, description, icon], index) => <article key={title} className="aq-card"><div className="aq-card-num">V/{String(index+1).padStart(2,"0")}</div><div className="aq-card-icon"><AqIcon name={icon} size={32}/></div><h3 className="aq-card-title">{title}</h3><p className="aq-card-desc">{description}</p></article>)}</div></div></section><ContactSection /></>;
}
