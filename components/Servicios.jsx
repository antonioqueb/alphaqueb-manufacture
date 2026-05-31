import Link from "next/link";
import { AqIcon, IconArrowUR } from "@/components/AqIcons";
const phases = [
  ["Diagnóstico Operativo", "Analizamos tu operación y definimos indicadores para medir la mejora.", "data"],
  ["Diseño de la Solución", "Seleccionamos las herramientas y diseñamos la arquitectura del sistema.", "strategy"],
  ["Implementación", "Configuramos sistemas, migramos información y cuidamos continuidad operativa.", "plc"],
  ["Desarrollo Personalizado", "Creamos integraciones y módulos específicos para requerimientos críticos.", "wrench"],
  ["Capacitación", "Entrenamos a tu equipo con casos reales para asegurar adopción.", "users"],
  ["Mejora Continua", "Monitoreamos indicadores y proponemos ajustes a largo plazo.", "shield"],
];
export default function Servicios() {
  return <section id="servicios" className="aq-section"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Consultoría tecnológica</span><div><h2 className="aq-section-title">Especialistas en <span className="accent">ERP, CRM, MES y SCADA</span>.</h2><p className="aq-section-lead">Integramos soluciones que reducen ineficiencias y elevan la rentabilidad.</p></div></div><div className="aq-grid-3">{phases.map(([title, desc, icon], idx) => <Link href="/#contacto" key={title} className="aq-card"><div className="aq-card-num">{String(idx+1).padStart(2,"0")}/06</div><div className="aq-card-icon"><AqIcon name={icon} size={32}/></div><h3 className="aq-card-title">{title}</h3><p className="aq-card-desc">{desc}</p><div className="aq-card-arrow"><IconArrowUR size={20}/></div></Link>)}</div></div></section>;
}
