const FAQ_ITEMS = [
  ["¿Qué tipo de sistemas empresariales implementan?", "Implementamos ERP, CRM, sistemas SCADA y soluciones personalizadas orientadas a optimizar procesos industriales, comerciales y administrativos."],
  ["¿Cuánto tiempo tarda en implementarse un sistema nuevo?", "El tiempo promedio oscila entre 4 y 12 meses dependiendo del tamaño, complejidad e integraciones necesarias."],
  ["¿Mi empresa debe detener operaciones durante la implementación?", "No. Las implementaciones se planifican para minimizar impacto operativo mediante migraciones graduales o programadas."],
  ["¿Puedo integrar su sistema con aplicaciones existentes?", "Sí. Diseñamos integraciones con sistemas contables, herramientas especializadas, ERP, CRM, MES, SCADA y APIs internas."],
  ["¿Proveen capacitación después de implementar?", "Sí. Capacitamos por rol y acompañamos durante el arranque para asegurar adopción real."],
];
export default function Faq() {
  return <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">FAQ</span><div><h2 className="aq-section-title">Preguntas <span className="accent">frecuentes</span>.</h2><p className="aq-section-lead">Respuestas directas para entender el alcance operativo de una implementación.</p></div></div><div className="aq-grid-2">{FAQ_ITEMS.map(([q, a], idx) => <details key={q} className="aq-card" style={{ minHeight: "auto" }}><summary className="aq-card-title" style={{ cursor: "pointer", fontSize: 26 }}>{String(idx+1).padStart(2,"0")} · {q}</summary><p className="aq-card-desc" style={{ marginTop: 16 }}>{a}</p></details>)}</div></div></section>;
}
