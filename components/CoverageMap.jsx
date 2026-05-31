"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const activeStates = ["Nuevo León"];

export default function CoverageMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const handleClick = (geo, event) => {
    const name = geo.properties.name;
    if (activeStates.includes(name)) {
      const svg = event.currentTarget.ownerSVGElement;
      const rect = svg.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      setSelectedState(name);
    } else setSelectedState(null);
  };
  return <section className="aq-section compact"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Cobertura</span><div><h2 className="aq-section-title">Base en Monterrey, <span className="accent">operación nacional</span>.</h2><p className="aq-section-lead">Comunicación enfocada en Monterrey y capacidad de acompañar proyectos en todo México.</p></div></div><div className="aq-panel" style={{ position: "relative" }}><ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [-102, 24] }} width={800} height={600} aria-label="Mapa de México con proyectos activos" style={{ width: "100%", height: "auto" }}><Geographies geography="/mexico.json">{({ geographies }) => geographies.map((geo) => { const isActive = activeStates.includes(geo.properties.name); return <Geography key={geo.rsmKey} geography={geo} onClick={(e) => handleClick(geo, e)} tabIndex={-1} style={{ default: { outline: "none", fill: isActive ? "var(--aq-lime)" : "#141418", stroke: "var(--aq-line)" }, hover: { outline: "none", fill: isActive ? "var(--aq-purple-bright)" : "#1e1e24", stroke: "var(--aq-lime)" }, pressed: { outline: "none" } }} />; })}</Geographies></ComposableMap>{selectedState && <div className="aq-float-card" style={{ left: tooltipPos.x, top: tooltipPos.y }}><div className="l">Base operativa</div><div className="v">{selectedState}</div></div>}</div></div></section>;
}
