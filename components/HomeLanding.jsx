"use client";

import Link from "next/link";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import { Donut, DualLineChart, LineChart, Spark } from "@/components/AqCharts";
import { AqIcon, IconArrow, IconArrowUR } from "@/components/AqIcons";

const SERVICES = [
  {
    icon: "factory",
    title: "Visibilidad de planta",
    desc: "Saber qué pasa en producción, medir rendimiento, documentar calidad y atacar paros, rechazos y desviaciones con datos reales.",
    tags: ["OEE", "FPY", "NCR", "Downtime"],
  },
  {
    icon: "truck",
    title: "Importación y cadena de suministro",
    desc: "Saber dónde está cada embarque y contenedor, de origen a bodega, midiendo cumplimiento, tiempos y precisión de entrega.",
    tags: ["OTIF", "ETA", "Lead Time", "Fill Rate"],
  },
  {
    icon: "calendar",
    title: "Operación de eventos y renta",
    desc: "Controlar inventario, equipo, asignaciones y personal cuando todo se mueve al mismo tiempo y el margen de error es corto.",
    tags: ["SLA", "Utilization", "TAT", "Inventory Accuracy"],
  },
  {
    icon: "shield",
    title: "Cumplimiento ambiental",
    desc: "Ordenar manifiestos, reportes, evidencia y documentos regulatorios para responder mejor ante operación, cliente y auditoría.",
    tags: ["Audit Ready", "SLA", "TAT", "Traceability"],
  },
  {
    icon: "data",
    title: "Tableros y reportes",
    desc: "Convertir la operación en indicadores entendibles para dirección, administración y responsables de proceso.",
    tags: ["KPI", "BI", "Forecast", "Variance"],
  },
  {
    icon: "strategy",
    title: "Acompañamiento y soporte",
    desc: "Diseñar la ruta, implementar por etapas y sostener la operación después del arranque con soporte recurrente.",
    tags: ["SLA", "MTTR", "Backlog", "Uptime"],
  },
];

const CLIENTS = [
  { name: "HEXÁGONOS MEXICANOS", area: "Manufactura y calidad", kpi: "OEE · FPY · NCR" },
  { name: "SERVICIOS AMBIENTALES INTERNACIONALES", area: "Cumplimiento ambiental", kpi: "SLA · TAT · Audit Ready" },
  { name: "SOM GROUP", area: "Cadena de suministro", kpi: "OTIF · ETA · Lead Time" },
  { name: "SOM CABOS", area: "Operación y logística", kpi: "Fill Rate · SLA · Utilization" },
];

const STEPS = [
  {
    name: "Diagnóstico",
    desc: "30 a 40 horas de análisis profundo de negocio, procesos, datos y sistemas actuales. Salimos con línea base de KPIs, fricciones y prioridades.",
  },
  {
    name: "Diseño",
    desc: "Definimos a dónde vamos, qué se construye primero, qué indicadores se van a mover y qué resultado debe esperar dirección.",
  },
  {
    name: "Implementación",
    desc: "Construimos junto a tu equipo: desarrollo, integración, pruebas, capacitación, tableros y acompañamiento del cambio.",
  },
  {
    name: "Optimización",
    desc: "Ajustamos con operación real, medimos contra KPIs y dejamos soporte continuo. El sistema no termina al arrancar: empieza a madurar.",
  },
];

const INDUSTRIES = [
  {
    name: "Manufactura y calidad",
    tag: "V/01",
    icon: "factory",
    desc: "Operaciones con producción, inspecciones, planeación, liberaciones, documentos y calidad donde los KPIs deben estar vivos, no escondidos en hojas sueltas.",
    tags: ["OEE", "FPY", "NCR", "Hexágonos Mexicanos"],
  },
  {
    name: "Importación y cadena de suministro",
    tag: "V/02",
    icon: "truck",
    desc: "Empresas que necesitan visibilidad de embarques, contenedores, inventario, entregas y coordinación entre múltiples proveedores.",
    tags: ["OTIF", "ETA", "Lead Time", "SOM Group"],
  },
  {
    name: "Operación y logística",
    tag: "V/03",
    icon: "calendar",
    desc: "Operaciones donde inventario, equipo, personal y tiempos se cruzan en vivo, con decisiones rápidas y cumplimiento medible.",
    tags: ["SLA", "Utilization", "Fill Rate", "SOM Cabos"],
  },
  {
    name: "Cumplimiento ambiental",
    tag: "V/04",
    icon: "shield",
    desc: "Empresas que necesitan controlar manifiestos, residuos, reportes, evidencia y versiones documentales sin perder trazabilidad.",
    tags: ["Audit Ready", "TAT", "SLA", "SAI"],
  },
];

const CASES = [
  {
    industry: "Manufactura y calidad · Hexágonos Mexicanos",
    title: "Calidad y planeación con KPIs operativos",
    client: "Hexágonos Mexicanos · operación manufacturera",
    desc: "Implementamos un sistema de calidad de punta a punta: inspecciones, certificados, acciones correctivas, devoluciones de cliente, liberación de muestras y documentos, conectado con la planeación de producción. El foco no fue instalar pantallas: fue medir rendimiento, calidad y recurrencia de fallas para decidir mejor.",
    duration: "Proyecto en operación",
    scope: "Calidad, documentos, planeación, trazabilidad",
    results: [
      { v: "87.3%", l: "OEE objetivo" },
      { v: "94%", l: "FPY calidad" },
      { v: "-31%", l: "NCR recurrentes" },
    ],
    chartA: [44, 46, 48, 52, 57, 62, 66, 70, 74, 79, 82, 86, 90],
    chartB: [44, 45, 46, 48, 49, 51, 53, 55, 57, 58, 60, 61, 63],
    donut: 87,
    impact: [
      { l: "OEE", v: 87 },
      { l: "FPY", v: 94, p: true },
      { l: "NCR", v: 69 },
    ],
  },
  {
    industry: "Cumplimiento ambiental · SAI",
    title: "Manifiestos y evidencia medidos por SLA",
    client: "Servicios Ambientales Internacionales · cumplimiento ambiental",
    desc: "Desarrollamos una plataforma para manifiestos ambientales con clasificación de residuos, control de versiones, remanifestación, salidas de centro de acopio, recepción de residuos y reportes regulatorios. La prioridad fue reducir tiempo de respuesta, mejorar cumplimiento documental y sostener evidencia defendible ante auditoría.",
    duration: "Arranque · Enero 2026",
    scope: "Manifiestos, evidencia, reportes, acopio",
    results: [
      { v: "100%", l: "Audit Ready" },
      { v: "98%", l: "SLA documental" },
      { v: "-42%", l: "TAT reportes" },
    ],
    chartA: [38, 43, 46, 51, 55, 59, 65, 69, 74, 80, 84, 88, 92],
    chartB: [38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 51, 52],
    donut: 92,
    impact: [
      { l: "Audit", v: 100 },
      { l: "SLA", v: 98, p: true },
      { l: "TAT", v: 58 },
    ],
  },
  {
    industry: "Cadena de suministro · SOM Group",
    title: "Visibilidad logística de punta a punta",
    client: "SOM Group · cadena de suministro e importación",
    desc: "Integramos una vista operativa para dar seguimiento a embarques, contenedores, entregas, documentos y responsables. El objetivo fue que dirección pudiera revisar cumplimiento, tiempos estimados y desviaciones sin depender de correos dispersos ni reportes manuales.",
    duration: "Proyecto en operación",
    scope: "Embarques, contenedores, inventario, entregas",
    results: [
      { v: "96%", l: "OTIF embarques" },
      { v: "92%", l: "ETA Accuracy" },
      { v: "-18%", l: "Lead Time" },
    ],
    chartA: [50, 52, 55, 57, 60, 64, 68, 72, 75, 80, 84, 89, 93],
    chartB: [50, 51, 51, 53, 54, 55, 57, 58, 60, 62, 63, 65, 66],
    donut: 93,
    impact: [
      { l: "OTIF", v: 96 },
      { l: "ETA", v: 92, p: true },
      { l: "LT", v: 82 },
    ],
  },
  {
    industry: "Operación y logística · SOM Cabos",
    title: "Control operativo para inventario y servicio",
    client: "SOM Cabos · operación logística",
    desc: "Diseñamos una estructura de control para inventario, disponibilidad, asignaciones, entregas y cumplimiento de servicio. La meta fue medir capacidad real, uso de activos y tiempos de respuesta para operar con menos improvisación.",
    duration: "Proyecto en operación",
    scope: "Inventario, asignaciones, entregas, servicio",
    results: [
      { v: "97%", l: "Fill Rate" },
      { v: "84%", l: "Utilization" },
      { v: "95%", l: "SLA operación" },
    ],
    chartA: [46, 49, 53, 57, 61, 66, 70, 75, 79, 83, 87, 90, 95],
    chartB: [46, 47, 49, 50, 52, 54, 55, 57, 59, 61, 62, 64, 66],
    donut: 95,
    impact: [
      { l: "Fill", v: 97 },
      { l: "Util", v: 84, p: true },
      { l: "SLA", v: 95 },
    ],
  },
];

const VALUES = [
  { name: "Enfoque", desc: "Resolvemos problemas reales del negocio, no síntomas superficiales." },
  { name: "Claridad", desc: "Cada sistema debe traducirse en KPIs, responsables y decisiones visibles." },
  { name: "Compromiso", desc: "Acompañamos hasta que la operación funciona y el equipo puede sostenerla." },
  { name: "Resultados", desc: "Cada decisión técnica debe aterrizar en control, trazabilidad o capacidad de decisión." },
  { name: "Integridad", desc: "Hablamos claro, cobramos justo y te decimos la verdad aunque no te convenga contratarnos." },
];

const INSIGHTS = [
  { cat: "Dirección", date: "12 · MAY · 2026", title: "Cómo justificar con KPIs un proyecto de sistemas ante dirección", read: "8 min" },
  { cat: "Logística", date: "28 · ABR · 2026", title: "OTIF, ETA y Lead Time: los tres indicadores que ordenan una operación logística", read: "11 min" },
  { cat: "Cumplimiento", date: "04 · ABR · 2026", title: "SLA, TAT y Audit Ready: cómo medir evidencia ambiental sin improvisar", read: "7 min" },
];

function SectionHead({ tag, title, lead }) {
  return (
    <div className="aq-section-head">
      <span className="aq-section-tag">{tag}</span>
      <div>
        <h2 className="aq-section-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="aq-section-lead">{lead}</p>
      </div>
    </div>
  );
}

function HeroPanel() {
  const data = [42, 48, 45, 58, 62, 56, 71, 78, 74, 88, 95, 102, 118];

  return (
    <div style={{ position: "relative" }}>
      <div className="aq-panel" style={{ marginRight: 32 }}>
        <span className="aq-panel-tag">KPI cockpit · vista ilustrativa</span>
        <div className="aq-panel-head">
          <div>
            <div className="title">Rendimiento operativo · Q2</div>
            <div style={{ fontFamily: "var(--aq-font-head)", fontSize: 28, lineHeight: 1, marginTop: 6 }}>
              OEE GLOBAL · 87.3%
            </div>
          </div>
          <div className="aq-live"><span className="aq-live-dot" />KPI VIEW</div>
        </div>

        <div className="aq-kpi-row">
          <div className="aq-kpi up"><div className="lbl">OTIF</div><div className="val">96<span className="unit">%</span></div></div>
          <div className="aq-kpi purp"><div className="lbl">FPY</div><div className="val">94<span className="unit">%</span></div></div>
          <div className="aq-kpi"><div className="lbl">MTTR</div><div className="val" style={{ color: "var(--aq-lime)" }}>-28<span className="unit">%</span></div></div>
        </div>

        <div className="aq-chart"><LineChart data={data} /></div>
        <div className="aq-panel-foot"><span>OEE</span><span>OTIF</span><span>SLA</span></div>
      </div>

      <div className="aq-float-card" style={{ left: -8, bottom: 84 }}><div className="l">Lead Time</div><div className="v">-18%</div></div>
      <div className="aq-float-card purple" style={{ right: -16, top: 32 }}><div className="l">SLA documental</div><div className="v">98%</div></div>
    </div>
  );
}

function ClientStrip() {
  return (
    <div style={{ marginTop: 34, padding: "18px 0 0", borderTop: "1px solid var(--aq-line-soft)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <div style={{ fontFamily: "var(--aq-font-tech)", fontSize: 12.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--aq-text-dim)" }}>
          Casos nombrables y frentes medibles
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {CLIENTS.map((client) => (
            <div key={client.name} style={{ border: "1px solid var(--aq-line-soft)", background: "rgba(255,255,255,.02)", padding: "10px 14px", minWidth: 178 }}>
              <div style={{ fontFamily: "var(--aq-font-tech)", fontSize: 13, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--aq-text)", whiteSpace: "nowrap" }}>{client.name}</div>
              <div style={{ marginTop: 5, fontSize: 13.5, color: "var(--aq-text-dim)", fontWeight: 500 }}>{client.area}</div>
              <div style={{ marginTop: 6, fontFamily: "var(--aq-font-tech)", fontSize: 12, fontWeight: 700, letterSpacing: ".09em", color: "var(--aq-lime)", textTransform: "uppercase" }}>{client.kpi}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseDash({ c }) {
  const impact = c.impact || [
    { l: "OEE", v: 86 },
    { l: "SLA", v: 92, p: true },
    { l: "TAT", v: 74 },
  ];

  return (
    <div className="aq-dash">
      <div className="aq-panel-head" style={{ marginBottom: 14 }}>
        <div>
          <div className="title">Resultado · proyecto</div>
          <div style={{ fontFamily: "var(--aq-font-head)", fontSize: 22, lineHeight: 1, marginTop: 6 }}>
            {c.industry.split("·")[0].trim().toUpperCase()}
          </div>
        </div>
        <div className="aq-live"><span className="aq-live-dot" />KPI TRACK</div>
      </div>

      <div className="aq-dash-row">
        <div className="aq-dash-card">
          <div className="lbl">KPI coverage</div>
          <div className="aq-donut-wrap" style={{ marginTop: 6 }}>
            <Donut value={c.donut} size={56} />
            <div>
              <div style={{ fontFamily: "var(--aq-font-tech)", fontSize: 13, fontWeight: 600, color: "var(--aq-text-dim)" }}>indicadores cubiertos</div>
              <div style={{ fontFamily: "var(--aq-font-head)", fontSize: 20, color: "var(--aq-lime)", lineHeight: 1 }}>{c.results[0].l}</div>
            </div>
          </div>
        </div>

        <div className="aq-dash-card purp">
          <div className="lbl">KPI principal</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="val">{c.results[0].v}</div>
            <Spark data={c.chartA.slice(0, 8)} color="var(--aq-purple-bright)" width={64} height={24} />
          </div>
        </div>
      </div>

      <div className="aq-dash-card" style={{ marginBottom: 14 }}>
        <div className="lbl" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Baseline vs operación objetivo</span>
          <span style={{ color: "var(--aq-lime)" }}>● actual</span>
        </div>
        <div style={{ marginTop: 10 }}><DualLineChart a={c.chartA} b={c.chartB} height={110} /></div>
      </div>

      <div className="aq-dash-card">
        <div className="lbl">Indicadores de impacto</div>
        <div className="aq-bar-row">
          {impact.map((b, i) => (
            <div key={i} className="aq-bar">
              <span style={{ color: "var(--aq-text-dim)", width: 110 }}>{b.l}</span>
              <span className="aq-bar-track"><span className={`aq-bar-fill ${b.p ? "p" : ""}`} style={{ width: `${b.v}%` }} /></span>
              <span style={{ color: "var(--aq-text)", width: 36, textAlign: "right" }}>{b.v}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section id="casos" className="aq-section">
      <div className="aq-wrap">
        <SectionHead
          tag="04 · Casos"
          title={'4 casos de <span class="accent">éxito medibles</span>.'}
          lead="Casos nombrables donde el reto no era instalar software: era ordenar la operación, construir alrededor de procesos existentes y dejar KPIs que dirección pudiera seguir."
        />

        <div className="aq-case-tabs">
          {CASES.map((cs, i) => (
            <button key={i} className={`aq-case-tab ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
              {String(i + 1).padStart(2, "0")} · {cs.industry}
            </button>
          ))}
        </div>

        <div className="aq-case-panel">
          <div>
            <div className="aq-case-meta"><span>Estado · <b>{c.duration}</b></span><span>Alcance · <b>{c.scope}</b></span></div>
            <h3 className="aq-case-title">{c.title}</h3>
            <p style={{ fontFamily: "var(--aq-font-tech)", fontSize: 13, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--aq-text-dim)", margin: "0 0 18px" }}>{c.client}</p>
            <p className="aq-case-desc">{c.desc}</p>
            <div className="aq-case-results">
              {c.results.map((r, i) => <div key={i} className="aq-kpi"><div className="lbl">{r.l}</div><div className="val">{r.v}</div></div>)}
            </div>
          </div>
          <CaseDash c={c} />
        </div>
      </div>
    </section>
  );
}

export default function HomeLanding() {
  return (
    <>
      <section className="aq-hero" id="top">
        <div className="aq-wrap">
          <div className="aq-hero-grid">
            <div>
              <div className="aq-eyebrow">Consultoría selectiva · Monterrey · operación nacional</div>
              <h1 className="aq-hero-title">El <span className="lime">proceso</span> manda.<br/><span className="stroke">Tu ERP se adapta.</span></h1>
              <p className="aq-hero-sub">Implementamos y desarrollamos sistemas a la medida para empresas que ya crecieron más allá de los sistemas que tienen hoy. No tomamos cualquier proyecto: tomamos los que exigen construir alrededor de tu forma de operar y medir lo que realmente mueve la operación.</p>
              <div className="aq-cta-row"><Link href="#contacto" className="aq-btn aq-btn-primary">Plantea tu reto <IconArrow size={14} /></Link><Link href="#servicios" className="aq-btn aq-btn-ghost">Qué hacemos</Link></div>
              <div className="aq-stat-row">
                {[
                  { v: "30–40 h", l: "De diagnóstico profundo antes de proponerte una ruta" },
                  { v: "OEE · OTIF · SLA", l: "Indicadores claros para dirección y operación" },
                ].map((s, i) => <div key={i} className="aq-stat"><div className="aq-stat-v">{s.v}</div><div className="aq-stat-l">{s.l}</div></div>)}
              </div>
            </div>
            <HeroPanel />
          </div>
          <div className="aq-marquee">
            <div className="aq-marquee-track">
              <span>OEE · OTIF · SLA · MTTR · FPY · NCR · ETA Accuracy · Lead Time · Fill Rate · TAT · Audit Ready · Uptime · </span>
              <span>OEE · OTIF · SLA · MTTR · FPY · NCR · ETA Accuracy · Lead Time · Fill Rate · TAT · Audit Ready · Uptime · </span>
            </div>
          </div>
          <ClientStrip />
        </div>
      </section>

      <section id="servicios" className="aq-section">
        <div className="aq-wrap">
          <SectionHead
            tag="01 · Servicios"
            title={'Lo que <span class="accent">hacemos</span> por tu operación.'}
            lead="Combinamos análisis del negocio, desarrollo a la medida e integración para resolver lo que la mayoría de implementadores no toca. Cada ruta debe terminar en procesos medibles, responsables claros y KPIs visibles."
          />
          <div className="aq-grid-3">
            {SERVICES.map((s, i) => <article key={i} className="aq-card"><div className="aq-card-num">{String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}</div><div className="aq-card-icon"><AqIcon name={s.icon} size={32} /></div><h3 className="aq-card-title">{s.title}</h3><p className="aq-card-desc">{s.desc}</p><div className="aq-tags">{s.tags.map(t => <span key={t} className="aq-tag">{t}</span>)}</div><div className="aq-card-arrow"><IconArrowUR size={20} /></div></article>)}
          </div>
        </div>
      </section>

      <section id="enfoque" className="aq-section compact">
        <div className="aq-wrap">
          <SectionHead tag="02 · Enfoque" title={'Un método <span class="purp">claro</span> para retos reales.'} lead="No llegamos a cambiar todo por cambiarlo. Primero entendemos por qué tu operación funciona como funciona, qué KPIs están rotos y dónde los sistemas actuales ya se quedaron cortos." />
          <div className="aq-method-wrap">
            <div className="aq-method-grid">
              {STEPS.map((s, i) => <div key={i} className={`aq-step ${i === 0 ? "active" : ""}`}><div className="aq-step-dot" /><div className="aq-step-num">{String(i + 1).padStart(2, "0")}</div><h3 className="aq-step-name">{s.name}</h3><p className="aq-step-desc">{s.desc}</p></div>)}
            </div>
            <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--aq-line-soft)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, fontFamily: "var(--aq-font-tech)", fontSize: 12.5, fontWeight: 700, letterSpacing: ".11em", color: "var(--aq-text-dim)", textTransform: "uppercase" }}>
              <span>Entrada · diagnóstico pagado</span><span>Duración inicial · 30–40 horas</span><span>Salida · baseline + roadmap + KPIs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aq-pull"><div className="aq-wrap"><h2 className="aq-pull-quote"><span className="s">&quot;</span>Si cualquier <span className="p">integrador</span><br/>puede hacerlo,<br/><span className="l">no es para nosotros.</span><span className="s">&quot;</span></h2><div className="aq-pull-attr">— Cómo elegimos los proyectos que tomamos</div></div></section>

      <section id="verticales" className="aq-section">
        <div className="aq-wrap">
          <SectionHead tag="03 · Verticales" title={'Dónde sabemos <span class="accent">de verdad</span>.'} lead="Cuatro frentes donde podemos aterrizar operación, sistemas y métricas. No prometemos lo que no entendemos." />
          <div className="aq-grid-2">
            {INDUSTRIES.map((ind) => <article key={ind.tag} className="aq-card"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 }}><span className="aq-card-num">{ind.tag}</span><span className="aq-card-icon"><AqIcon name={ind.icon} size={28} /></span></div><h3 className="aq-card-title" style={{ fontSize: 36 }}>{ind.name}</h3><p className="aq-card-desc">{ind.desc}</p><div className="aq-tags">{ind.tags.map(t => <span key={t} className="aq-tag">{t}</span>)}</div></article>)}
          </div>
          <div className="aq-vert-foot">
            <div><div className="aq-vert-foot-l">No tomamos proyectos donde</div><div className="aq-vert-foot-v">No hay decisión de dirección · el requerimiento no tiene dueño · el cliente apenas está averiguando qué quiere</div></div>
            <div style={{ textAlign: "right" }}><div className="aq-vert-foot-l">Base</div><div className="aq-vert-foot-v" style={{ color: "var(--aq-lime)" }}>Monterrey · operación nacional</div></div>
          </div>
        </div>
      </section>

      <CaseStudies />

      <section id="valores" className="aq-section compact"><div className="aq-wrap"><SectionHead tag="05 · Valores" title={'Cómo <span class="accent">trabajamos</span>.'} lead="Cinco principios que rigen cada conversación con un cliente, cada decisión técnica y cada entregable." /><div className="aq-values">{VALUES.map((v, i) => <div key={v.name} className="aq-value"><div className="aq-value-num">V/0{i + 1}</div><h3 className="aq-value-name">{v.name}</h3><p className="aq-value-desc">{v.desc}</p></div>)}</div></div></section>

      <section id="insights" className="aq-section"><div className="aq-wrap"><SectionHead tag="06 · Insights" title={'Lecturas para equipos que <span class="accent">deciden</span>.'} lead="Ideas prácticas para dirección, responsables de operación y equipos de tecnología que ya saben que el problema no se resuelve instalando software genérico." /><div className="aq-insights-grid">{INSIGHTS.map((post) => <article key={post.title} className="aq-insight-card"><div className="aq-insight-meta"><span style={{ color: "var(--aq-lime)" }}>{post.cat}</span><span>{post.date}</span></div><h3 className="aq-insight-title">{post.title}</h3><div className="aq-insight-foot"><span>{post.read} de lectura</span><IconArrowUR size={16} /></div></article>)}</div></div></section>

      <ContactSection />
    </>
  );
}