import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { LineChart, Donut } from "@/components/AqCharts";
import { AqIcon, IconArrow, iconForText } from "@/components/AqIcons";

function splitAdvantage(text) {
  const idx = text.indexOf(":");
  if (idx === -1) return { key: text, value: "" };
  return { key: text.slice(0, idx), value: text.slice(idx + 1).trim() };
}

export default function ServiceDetailPage({ copy }) {
  const scope = [copy.description2, copy.description3, copy.description4].filter(Boolean);
  return (
    <>
      <section className="aq-service-hero">
        <div className="aq-wrap">
          <div className="aq-service-grid">
            <div>
              <div className="aq-eyebrow">Servicio especializado · Alphaqueb</div>
              <h1 className="aq-service-title"><span>{copy.title.split(" ")[0]}</span> {copy.title.split(" ").slice(1).join(" ")}</h1>
              <p className="aq-service-sub">{copy.description1}</p>
              <div className="aq-cta-row"><Link href="#contacto" className="aq-btn aq-btn-primary">Contáctanos <IconArrow size={14} /></Link><Link href="/servicios" className="aq-btn aq-btn-ghost">Ver servicios</Link></div>
            </div>
            <div className="aq-panel">
              <span className="aq-panel-tag">Evaluación operativa</span>
              <div className="aq-panel-head"><div><div className="title">Impacto esperado</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 32, lineHeight: 1, marginTop: 6 }}>ROADMAP · 12—24 SEM</div></div><div className="aq-live"><span className="aq-live-dot" />ACTIVO</div></div>
              <div className="aq-service-metrics"><div className="aq-metric"><div className="k">Visibilidad</div><div className="v">+90%</div></div><div className="aq-metric"><div className="k">Riesgo operativo</div><div className="v">-35%</div></div></div>
              <div className="aq-chart" style={{ marginTop: 18 }}><LineChart data={[38,42,48,47,56,62,68,72,80,84,88,91]} /></div>
              <div className="aq-panel-foot"><span>Diagnóstico</span><span>Arquitectura</span><span>Implementación</span></div>
            </div>
          </div>
        </div>
      </section>
      {scope.length > 0 && <section className="aq-section compact"><div className="aq-wrap"><div className="aq-scope">{scope.map((item, i) => <div key={i} className="aq-scope-card"><div className="n">Alcance · 0{i + 1}</div><p>{item}</p></div>)}</div></div></section>}
      <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Beneficios</span><div><h2 className="aq-section-title">Qué cambia en tu <span className="accent">operación</span>.</h2><p className="aq-section-lead">Beneficios aterrizados a proceso, datos y control operativo.</p></div></div><div className="aq-benefit-grid">{(copy.advantages || []).map((advantage, index) => { const a = splitAdvantage(advantage); return <article key={index} className="aq-benefit"><div className="aq-benefit-icon"><AqIcon name={iconForText(a.key)} size={22} /></div><div><h3>{a.key}</h3><p>{a.value || advantage}</p></div></article>; })}</div></div></section>
      <section className="aq-section compact"><div className="aq-wrap"><div className="aq-panel"><div className="aq-panel-head"><div><div className="title">Criterio de inversión</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 42, lineHeight: 1, marginTop: 6 }}>DECISIÓN BASADA EN DATOS</div></div><Donut value={86} size={74} /></div><p className="aq-section-lead" style={{ margin: 0 }}>{copy.costDetails || "Evaluamos la operación actual, definimos prioridades y construimos una ruta técnica con retorno defendible."}</p></div></div></section>
      <ContactSection />
    </>
  );
}
