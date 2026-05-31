"use client";
const cards = [
  { title: "Ahorros Anuales Generados", value: "$28.2M", description: "+20% desde el año pasado" },
  { title: "Desarrollos Activos", value: "+179", description: "+1 en la última semana" },
  { title: "Clientes Activos", value: "+72", description: "+4 desde el mes pasado" },
  { title: "Clientes Totales", value: "+89", description: "+3 desde el mes pasado" },
];
export default function MultiCards() {
  return <section className="aq-section compact"><div className="aq-wrap"><div className="aq-grid-3" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{cards.map((card, idx) => <article key={card.title} className="aq-card" style={{ minHeight: 190 }}><div className="aq-card-num">KPI / 0{idx + 1}</div><h3 className="aq-card-title">{card.title}</h3><div className="aq-stat-v" style={{ fontSize: 34 }}>{card.value}</div><p className="aq-card-desc" style={{ marginTop: 12 }}>{card.description}</p></article>)}</div></div></section>;
}
