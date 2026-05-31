import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { LineChart } from "@/components/AqCharts";
import { AqIcon, IconArrow, IconArrowUR, iconForText } from "@/components/AqIcons";

function splitAdvantage(text) {
  const idx = text.indexOf(":");
  if (idx === -1) return { key: text, value: "" };
  return { key: text.slice(0, idx), value: text.slice(idx + 1).trim() };
}

export default function ServiceIndexPage({ copy, services = [], basePath = "/servicios" }) {
  return (
    <>
      <section className="aq-service-hero">
        <div className="aq-wrap">
          <div className="aq-service-grid">
            <div>
              <div className="aq-eyebrow">Vertical de servicio · Alphaqueb</div>
              <h1 className="aq-service-title"><span>{copy.title.split(" ")[0]}</span> {copy.title.split(" ").slice(1).join(" ")}</h1>
              <p className="aq-service-sub">{copy.description1}</p>
              <div className="aq-cta-row"><Link href="#contacto" className="aq-btn aq-btn-primary">Contáctanos <IconArrow size={14} /></Link><Link href="/#casos" className="aq-btn aq-btn-ghost">Ver casos</Link></div>
            </div>
            <div className="aq-panel">
              <span className="aq-panel-tag">Sistema operativo</span>
              <div className="aq-panel-head"><div><div className="title">Madurez digital</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 32, lineHeight: 1, marginTop: 6 }}>DIAGNÓSTICO · ROADMAP</div></div><div className="aq-live"><span className="aq-live-dot" />EN EVALUACIÓN</div></div>
              <div className="aq-chart"><LineChart data={[32,38,41,47,55,59,64,72,78,84,91,96]} /></div>
              <div className="aq-panel-foot"><span>Procesos</span><span>Datos</span><span>Integración</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Beneficios</span><div><h2 className="aq-section-title">Ventajas para tu <span className="accent">operación</span>.</h2><p className="aq-section-lead">Cada beneficio se traduce en control, visibilidad y capacidad de decisión.</p></div></div><div className="aq-benefit-grid">{(copy.advantages || []).map((advantage, index) => { const a = splitAdvantage(advantage); return <article key={index} className="aq-benefit"><div className="aq-benefit-icon"><AqIcon name={iconForText(a.key)} size={22} /></div><div><h3>{a.key}</h3><p>{a.value || advantage}</p></div></article>; })}</div></div></section>
      <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Servicios especializados</span><div><h2 className="aq-section-title">Módulos de <span className="accent">implementación</span>.</h2><p className="aq-section-lead">Rutas específicas para atacar el problema correcto sin sobredimensionar la solución.</p></div></div><div className="aq-grid-2">{services.map((service, index) => <Link className="aq-service-link-card" key={service.slug} href={`${basePath}/${service.slug}`}><div className="aq-benefit-icon"><AqIcon name={iconForText(service.name)} size={22} /></div><div><h3>{service.name}</h3><span>Ver servicio · {String(index + 1).padStart(2, "0")}</span></div><IconArrowUR size={18} style={{ marginLeft: "auto", color: "var(--aq-text-mute)" }} /></Link>)}</div></div></section>
      <ContactSection />
    </>
  );
}
