const FAQ_ITEMS = [
  ["¿Qué tipo de empresas atienden?", "Empresas medianas y corporativos con operación real, procesos definidos y una necesidad clara de ordenar, integrar o personalizar sus sistemas. No somos la mejor opción para quien apenas está explorando qué quiere."],
  ["¿El diagnóstico es gratuito?", "No. La entrada es un diagnóstico pagado de 30 a 40 horas donde analizamos procesos, datos, sistemas actuales, responsables y fricciones reales antes de proponer una implementación."],
  ["¿Implementan software estándar o desarrollo a la medida?", "Ambos, cuando tiene sentido. Partimos de plataformas existentes cuando conviene, pero desarrollamos e integramos lo necesario para que el sistema acompañe la operación y no se vuelva un cuello de botella."],
  ["¿Trabajan solo en Monterrey?", "Tenemos presencia física y comunicación enfocada en Monterrey, pero operamos proyectos a nivel nacional."],
  ["¿Qué pasa después del arranque?", "Normalmente la relación continúa con soporte recurrente, ajustes, nuevas etapas e integración de procesos conforme la operación madura."],
];
export default function Faq() {
  return <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">FAQ</span><div><h2 className="aq-section-title">Preguntas <span className="accent">frecuentes</span>.</h2><p className="aq-section-lead">Respuestas directas para saber si tu reto encaja con nuestra forma de trabajar.</p></div></div><div className="aq-grid-2">{FAQ_ITEMS.map(([q, a], idx) => <details key={q} className="aq-card" style={{ minHeight: "auto" }}><summary className="aq-card-title" style={{ cursor: "pointer", fontSize: 26 }}>{String(idx+1).padStart(2,"0")} · {q}</summary><p className="aq-card-desc" style={{ marginTop: 16 }}>{a}</p></details>)}</div></div></section>;
}
