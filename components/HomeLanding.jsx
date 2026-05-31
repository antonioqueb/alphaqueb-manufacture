"use client";

import Link from "next/link";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import { Donut, DualLineChart, LineChart, Spark } from "@/components/AqCharts";
import { AqIcon, IconArrow, IconArrowUR } from "@/components/AqIcons";

const SERVICES = [
  { icon: "plc", title: "Inteligencia Operativa", desc: "Para manufactura compleja. Cerramos la brecha entre piso de planta y dirección con OEE, trazabilidad y control en tiempo real.", tags: ["OEE", "MES", "SCADA", "Trazabilidad"] },
  { icon: "truck", title: "Cadena de Suministro Internacional", desc: "Importación, aduanas, embarques y trazabilidad de contenedores. Operación visible de extremo a extremo.", tags: ["Aduanas", "Contenedores", "WMS", "ETA"] },
  { icon: "calendar", title: "Logística de Eventos Masivos", desc: "Sistemas críticos para operar eventos de salud y experiencias masivas: aforos, suministros, equipos y personal.", tags: ["Aforos", "Tickets", "Staffing", "Tiempo real"] },
  { icon: "shield", title: "Cumplimiento Ambiental", desc: "Plataformas de reporte regulatorio, evidencia documental auditable y monitoreo continuo para normatividad ambiental.", tags: ["SEMARNAT", "Reportes", "Auditoría", "Documental"] },
  { icon: "data", title: "Analítica & Dashboards", desc: "Visualizamos lo que importa. KPIs accionables, modelos predictivos y reportes operativos en vivo para decisiones reales.", tags: ["BI", "ML", "KPIs", "Power BI"] },
  { icon: "strategy", title: "Transformación Digital", desc: "Hoja de ruta tecnológica con foco en valor. Acompañamiento ejecutivo, gobernanza, integración y madurez digital.", tags: ["Roadmap", "ERP", "PMO", "Governance"] },
];

const STEPS = [
  { name: "Diagnóstico", desc: "Auditamos procesos, datos, equipos y arquitectura para identificar fricción y oportunidades cuantificables." },
  { name: "Diseño", desc: "Definimos arquitectura objetivo, casos de uso, KPIs y plan de implementación por fases con ROI explícito." },
  { name: "Implementación", desc: "Ejecutamos junto a tu equipo: ingeniería, integración, datos y gestión del cambio operativo." },
  { name: "Optimización", desc: "Iteramos sobre datos reales. Escalamos lo que funciona. Acompañamiento continuo y soporte." },
];

const INDUSTRIES = [
  { name: "Manufactura Compleja", tag: "V/01", icon: "factory", desc: "Plantas con múltiples líneas, trazabilidad regulada y operación 24/7 donde el costo de no saber es alto.", tags: ["OEE", "Trazabilidad", "MES"] },
  { name: "Comercio Internacional", tag: "V/02", icon: "truck", desc: "Importación, aduanas, embarques y trazabilidad de contenedores en cadena de suministro global.", tags: ["Aduanas", "Contenedores", "Embarques"] },
  { name: "Eventos Masivos & Salud", tag: "V/03", icon: "calendar", desc: "Logística operativa de eventos médicos y experiencias masivas: aforos, suministros y personal en tiempo real.", tags: ["Aforos", "Operación", "Tiempo real"] },
  { name: "Cumplimiento Ambiental", tag: "V/04", icon: "shield", desc: "Documentación regulatoria, evidencia auditable y monitoreo continuo para cumplimiento normativo.", tags: ["Reportes", "Evidencia", "Auditoría"] },
];

const CASES = [
  { industry: "Manufactura compleja · Bajío", title: "OEE en tiempo real para 4 líneas críticas", client: "Manufacturera multiplanta · operación 24/7", desc: "Integramos SCADA legacy con un MES nuevo, instalamos sensórica complementaria en cuellos de botella y desplegamos un dashboard accesible desde piso hasta dirección.", duration: "16 semanas", scope: "MES, SCADA, BI, gestión del cambio", results: [{ v: "+18.4%", l: "OEE global" }, { v: "-32%", l: "Paros no planeados" }, { v: "4.1×", l: "ROI primer año" }], chartA: [40,44,42,48,51,49,54,58,61,65,64,68,71], chartB: [40,41,42,43,44,44,45,46,47,48,49,50,52], donut: 71 },
  { industry: "Comercio internacional · CDMX", title: "Trazabilidad punta a punta de contenedores", client: "Importador de bienes de capital · 6 países origen", desc: "Construimos una torre de control unificada con datos de embarques, pedimentos, despacho aduanal y entrega final, con alertas por cada hito crítico.", duration: "22 semanas", scope: "Torre de control, integraciones EDI, alertas, BI", results: [{ v: "-41%", l: "Tiempo de despacho" }, { v: "100%", l: "Contenedores trazados" }, { v: "-3.2 días", l: "Lead time promedio" }], chartA: [78,74,70,68,64,60,58,54,52,48,44,42,38], chartB: [78,77,76,75,74,73,72,71,70,69,68,67,66], donut: 82 },
  { industry: "Eventos masivos · Salud", title: "Operación digital de un congreso médico nacional", client: "Organizador de eventos médicos · 12,000 asistentes", desc: "Diseñamos la plataforma operativa: control de aforos por sala, asignación de equipos en vivo, staffing dinámico y reporte regulatorio sanitario.", duration: "14 semanas", scope: "Operación en vivo, aforos, staffing, cumplimiento", results: [{ v: "0", l: "Incidentes operativos" }, { v: "12K+", l: "Asistentes gestionados" }, { v: "100%", l: "Cumplimiento sanitario" }], chartA: [20,35,48,62,78,92,105,110,108,102,88,65,40], chartB: [20,32,45,58,70,82,90,95,92,86,74,58,36], donut: 100 },
  { industry: "Cumplimiento ambiental · Querétaro", title: "Plataforma de evidencia regulatoria continua", client: "Operación industrial bajo SEMARNAT y CONAGUA", desc: "Construimos una plataforma que captura evidencia en el momento del evento operativo, la asocia a la obligación regulatoria y genera reportes auditables.", duration: "20 semanas", scope: "Captura digital, expediente regulatorio, reportes", results: [{ v: "-87%", l: "Tiempo de auditoría" }, { v: "100%", l: "Evidencia digitalizada" }, { v: "0", l: "Hallazgos críticos" }], chartA: [62,65,68,70,74,76,80,83,86,88,91,93,95], chartB: [62,63,64,64,65,66,66,67,68,69,70,71,72], donut: 95 },
];

const VALUES = [
  { name: "Enfoque", desc: "Resolvemos los problemas reales del negocio, no los superficiales." },
  { name: "Innovación", desc: "Aplicamos lo mejor de la ingeniería actual a contextos productivos." },
  { name: "Compromiso", desc: "Acompañamos hasta que la operación funciona — y los datos lo demuestran." },
  { name: "Resultados", desc: "Cada proyecto se mide. Cada decisión se respalda. Cada inversión rinde." },
  { name: "Integridad", desc: "Hablamos claro, cobramos justo y entregamos lo prometido." },
];

const INSIGHTS = [
  { cat: "Manufactura", date: "12 · MAY · 2026", title: "Cómo construir un caso de negocio defendible para un proyecto de OEE", read: "8 min" },
  { cat: "Comercio internacional", date: "28 · ABR · 2026", title: "Trazabilidad de contenedores: por qué los TMS comerciales no alcanzan", read: "11 min" },
  { cat: "Cumplimiento", date: "04 · ABR · 2026", title: "Tres errores comunes al digitalizar evidencia regulatoria ambiental", read: "7 min" },
];

function SectionHead({ tag, title, lead }) {
  return <div className="aq-section-head"><span className="aq-section-tag">{tag}</span><div><h2 className="aq-section-title" dangerouslySetInnerHTML={{ __html: title }} /><p className="aq-section-lead">{lead}</p></div></div>;
}

function HeroPanel() {
  const data = [42,48,45,58,62,56,71,78,74,88,95,102,118];
  return (
    <div style={{ position: "relative" }}>
      <div className="aq-panel" style={{ marginRight: 32 }}>
        <span className="aq-panel-tag">LIVE · Dashboard de cliente</span>
        <div className="aq-panel-head"><div><div className="title">Rendimiento operativo · Q2</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 28, lineHeight: 1, marginTop: 6 }}>OEE GLOBAL · 87.3%</div></div><div className="aq-live"><span className="aq-live-dot" />EN VIVO</div></div>
        <div className="aq-kpi-row"><div className="aq-kpi up"><div className="lbl">Producción</div><div className="val">+24.5<span className="unit">%</span></div></div><div className="aq-kpi purp"><div className="lbl">Eficiencia</div><div className="val">68<span className="unit">%</span></div></div><div className="aq-kpi"><div className="lbl">Paro no plan.</div><div className="val" style={{ color: "var(--aq-lime)" }}>-12.8<span className="unit">%</span></div></div></div>
        <div className="aq-chart"><LineChart data={data} /></div>
        <div className="aq-panel-foot"><span>SENSORES · 1,284</span><span>UPTIME · 99.92%</span><span>ACTUALIZADO HACE 12s</span></div>
      </div>
      <div className="aq-float-card" style={{ left: -8, bottom: 84 }}><div className="l">Mantenimiento predictivo</div><div className="v">14 alertas · 0 paros</div></div>
      <div className="aq-float-card purple" style={{ right: -16, top: 32 }}><div className="l">ROI proyecto</div><div className="v">8.4×</div></div>
    </div>
  );
}

function CaseDash({ c }) {
  return <div className="aq-dash"><div className="aq-panel-head" style={{ marginBottom: 14 }}><div><div className="title">Resultado · proyecto</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 22, lineHeight: 1, marginTop: 6 }}>{c.industry.split("·")[0].trim().toUpperCase()}</div></div><div className="aq-live"><span className="aq-live-dot" />EN OPERACIÓN</div></div><div className="aq-dash-row"><div className="aq-dash-card"><div className="lbl">Objetivo cumplido</div><div className="aq-donut-wrap" style={{ marginTop: 6 }}><Donut value={c.donut} size={56} /><div><div style={{ fontFamily: "var(--aq-font-tech)", fontSize: 11, color: "var(--aq-text-dim)" }}>vs baseline</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 20, color: "var(--aq-lime)", lineHeight: 1 }}>+{c.donut - 50}%</div></div></div></div><div className="aq-dash-card purp"><div className="lbl">Indicadores clave</div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><div className="val">{c.results[0].v}</div><Spark data={c.chartA.slice(0, 8)} color="var(--aq-purple-bright)" width={64} height={24} /></div></div></div><div className="aq-dash-card" style={{ marginBottom: 14 }}><div className="lbl" style={{ display: "flex", justifyContent: "space-between" }}><span>Análisis comparativo · proyecto vs baseline</span><span style={{ color: "var(--aq-lime)" }}>● actual</span></div><div style={{ marginTop: 10 }}><DualLineChart a={c.chartA} b={c.chartB} height={110} /></div></div><div className="aq-dash-card"><div className="lbl">Áreas de impacto</div><div className="aq-bar-row">{[{ l: "Producción", v: 86 }, { l: "Calidad", v: 72, p: true }, { l: "Mantenimiento", v: 64 }].map((b, i) => <div key={i} className="aq-bar"><span style={{ color: "var(--aq-text-dim)", width: 110 }}>{b.l}</span><span className="aq-bar-track"><span className={`aq-bar-fill ${b.p ? "p" : ""}`} style={{ width: `${b.v}%` }} /></span><span style={{ color: "var(--aq-text)", width: 36, textAlign: "right" }}>{b.v}%</span></div>)}</div></div></div>;
}

function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = CASES[active];
  return <section id="casos" className="aq-section"><div className="aq-wrap"><SectionHead tag="04 · Casos" title={'Retos que ya <span class="accent">resolvimos</span>.'} lead="Una muestra del trabajo entregado en operaciones reales: manufactura compleja, comercio internacional, eventos masivos y cumplimiento ambiental." /><div className="aq-case-tabs">{CASES.map((cs, i) => <button key={i} className={`aq-case-tab ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>{String(i + 1).padStart(2, "0")} · {cs.industry}</button>)}</div><div className="aq-case-panel"><div><div className="aq-case-meta"><span>Duración · <b>{c.duration}</b></span><span>Alcance · <b>{c.scope}</b></span></div><h3 className="aq-case-title">{c.title}</h3><p style={{ fontFamily: "var(--aq-font-tech)", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--aq-text-mute)", margin: "0 0 18px" }}>{c.client}</p><p className="aq-case-desc">{c.desc}</p><div className="aq-case-results">{c.results.map((r, i) => <div key={i} className="aq-kpi"><div className="lbl">{r.l}</div><div className="val">{r.v}</div></div>)}</div></div><CaseDash c={c} /></div></div></section>;
}

export default function HomeLanding() {
  return (
    <>
      <section className="aq-hero" id="top"><div className="aq-wrap"><div className="aq-hero-grid"><div><div className="aq-eyebrow">Consultoría selectiva · Retos de alta exigencia</div><h1 className="aq-hero-title">Datos que <span className="lime">informan.</span><br/>Estrategias que <span className="stroke">transforman.</span></h1><p className="aq-hero-sub">Consultoría estratégica para los retos más exigentes de la industria mexicana: manufactura compleja, comercio internacional, logística de eventos masivos y cumplimiento ambiental. Escogemos los proyectos. No al revés.</p><div className="aq-cta-row"><Link href="#contacto" className="aq-btn aq-btn-primary">Plantea tu reto <IconArrow size={14} /></Link><Link href="#casos" className="aq-btn aq-btn-ghost">Ver casos de éxito</Link></div><div className="aq-stat-row">{[{ v: "4", l: "Verticales donde tenemos experiencia profunda" }, { v: "<1 de 5", l: "Solicitudes que aceptamos por trimestre" }, { v: "8.4×", l: "ROI promedio sobre proyectos entregados" }].map((s, i) => <div key={i} className="aq-stat"><div className="aq-stat-v">{s.v}</div><div className="aq-stat-l">{s.l}</div></div>)}</div></div><HeroPanel /></div><div className="aq-marquee"><div className="aq-marquee-track"><span>Trazabilidad de contenedores · OEE · Comercio internacional · Aduanas · MES · Cumplimiento ambiental · Logística de eventos masivos · Cadena de frío · BI operativo · Reportes regulatorios · </span><span>Trazabilidad de contenedores · OEE · Comercio internacional · Aduanas · MES · Cumplimiento ambiental · Logística de eventos masivos · Cadena de frío · BI operativo · Reportes regulatorios · </span></div></div></div></section>
      <section id="servicios" className="aq-section"><div className="aq-wrap"><SectionHead tag="01 · Servicios" title={'Lo que <span class="accent">hacemos</span> por tu operación.'} lead="Combinamos consultoría estratégica, ingeniería de datos e integración de sistemas para resolver problemas que la mayoría de implementadores no toca. Sin humo. Con métricas." /><div className="aq-grid-3">{SERVICES.map((s, i) => <article key={i} className="aq-card"><div className="aq-card-num">{String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}</div><div className="aq-card-icon"><AqIcon name={s.icon} size={32} /></div><h3 className="aq-card-title">{s.title}</h3><p className="aq-card-desc">{s.desc}</p><div className="aq-tags">{s.tags.map(t => <span key={t} className="aq-tag">{t}</span>)}</div><div className="aq-card-arrow"><IconArrowUR size={20} /></div></article>)}</div></div></section>
      <section id="enfoque" className="aq-section compact"><div className="aq-wrap"><SectionHead tag="02 · Enfoque" title={'Un método <span class="purp">probado</span> para retos reales.'} lead="Transformamos datos en decisiones estratégicas. Acompañamos a empresas a crecer con inteligencia, innovación y visión de futuro." /><div className="aq-method-wrap"><div className="aq-method-grid">{STEPS.map((s, i) => <div key={i} className={`aq-step ${i === 1 ? "active" : ""}`}><div className="aq-step-dot" /><div className="aq-step-num">{String(i + 1).padStart(2, "0")}</div><h3 className="aq-step-name">{s.name}</h3><p className="aq-step-desc">{s.desc}</p></div>)}</div><div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--aq-line-soft)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, fontFamily: "var(--aq-font-tech)", fontSize: 11, letterSpacing: ".14em", color: "var(--aq-text-mute)", textTransform: "uppercase" }}><span>Duración típica · 12–24 semanas</span><span>Equipo multidisciplinario · Ingeniería + datos + negocio</span><span>Entregables · Arquitectura, código, dashboards, runbooks</span></div></div></div></section>
      <section className="aq-pull"><div className="aq-wrap"><h2 className="aq-pull-quote"><span className="s">&quot;</span>Si cualquier <span className="p">integrador</span><br/>puede hacerlo,<br/><span className="l">no es para nosotros.</span><span className="s">&quot;</span></h2><div className="aq-pull-attr">— Cómo elegimos los proyectos que tomamos</div></div></section>
      <section id="verticales" className="aq-section"><div className="aq-wrap"><SectionHead tag="03 · Verticales" title={'Dónde sabemos <span class="accent">de verdad</span>.'} lead="No somos una consultora para todos. Nos enfocamos en cuatro verticales donde tenemos experiencia profunda y donde podemos garantizar resultados." /><div className="aq-grid-2">{INDUSTRIES.map((ind) => <article key={ind.tag} className="aq-card"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 }}><span className="aq-card-num">{ind.tag}</span><span className="aq-card-icon"><AqIcon name={ind.icon} size={28} /></span></div><h3 className="aq-card-title" style={{ fontSize: 36 }}>{ind.name}</h3><p className="aq-card-desc">{ind.desc}</p><div className="aq-tags">{ind.tags.map(t => <span key={t} className="aq-tag">{t}</span>)}</div></article>)}</div><div className="aq-vert-foot"><div><div className="aq-vert-foot-l">No tomamos proyectos en</div><div className="aq-vert-foot-v">Implementaciones sin decisión ejecutiva · requerimientos sin dueño · proyectos sin datos</div></div><div style={{ textAlign: "right" }}><div className="aq-vert-foot-l">Tasa de aceptación</div><div className="aq-vert-foot-v" style={{ color: "var(--aq-lime)" }}>&lt; 1 de cada 5 solicitudes</div></div></div></div></section>
      <CaseStudies />
      <section id="valores" className="aq-section compact"><div className="aq-wrap"><SectionHead tag="05 · Valores" title={'Cómo <span class="accent">trabajamos</span>.'} lead="Cinco principios que rigen cada conversación con un cliente, cada decisión técnica y cada entregable." /><div className="aq-values">{VALUES.map((v, i) => <div key={v.name} className="aq-value"><div className="aq-value-num">V/0{i + 1}</div><h3 className="aq-value-name">{v.name}</h3><p className="aq-value-desc">{v.desc}</p></div>)}</div></div></section>
      <section id="insights" className="aq-section"><div className="aq-wrap"><SectionHead tag="06 · Insights" title={'Lecturas para equipos que <span class="accent">deciden</span>.'} lead="Notas técnicas, marcos de decisión y aprendizajes de nuestros proyectos. Sin clickbait. Sin generalidades." /><div className="aq-insights-grid">{INSIGHTS.map((post) => <article key={post.title} className="aq-insight-card"><div className="aq-insight-meta"><span style={{ color: "var(--aq-lime)" }}>{post.cat}</span><span>{post.date}</span></div><h3 className="aq-insight-title">{post.title}</h3><div className="aq-insight-foot"><span>{post.read} de lectura</span><IconArrowUR size={16} /></div></article>)}</div></div></section>
      <ContactSection />
    </>
  );
}
