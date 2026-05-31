"use client";
const cards = [
  { title: "Diagnóstico inicial", value: "30–40 h", description: "Análisis profundo antes de proponer alcance" },
  { title: "Base operativa", value: "Monterrey", description: "Presencia física y comunicación local" },
  { title: "Cobertura", value: "México", description: "Operación y acompañamiento nacional" },
  { title: "Relación típica", value: "Soporte", description: "Implementación más mejora recurrente" },
];
export default function MultiCards() {
  return <section className="aq-section compact"><div className="aq-wrap"><div className="aq-grid-3" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{cards.map((card, idx) => <article key={card.title} className="aq-card" style={{ minHeight: 190 }}><div className="aq-card-num">SEÑAL / 0{idx + 1}</div><h3 className="aq-card-title">{card.title}</h3><div className="aq-stat-v" style={{ fontSize: 34 }}>{card.value}</div><p className="aq-card-desc" style={{ marginTop: 12 }}>{card.description}</p></article>)}</div></div></section>;
}
