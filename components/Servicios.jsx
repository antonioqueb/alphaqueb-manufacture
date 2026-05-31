import Link from "next/link";
import { AqIcon, IconArrowUR } from "@/components/AqIcons";
const phases = [
  ["Diagnóstico operativo", "30 a 40 horas para entender procesos, datos, sistemas actuales y responsables.", "data"],
  ["Diseño de ruta", "Definimos qué se construye primero, qué se conserva y qué resultado debe esperar dirección.", "strategy"],
  ["Implementación", "Configuramos, desarrollamos, probamos y acompañamos la adopción sin detener la operación.", "plc"],
  ["Desarrollo a la medida", "Creamos integraciones y módulos específicos donde el software estándar se queda corto.", "wrench"],
  ["Capacitación", "Entrenamos al equipo con sus propios casos para que el sistema se use de verdad.", "users"],
  ["Soporte recurrente", "Acompañamos ajustes, nuevas etapas y mejora continua después del arranque.", "shield"],
];
export default function Servicios() {
  return <section id="servicios" className="aq-section"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Servicios</span><div><h2 className="aq-section-title">Sistemas alrededor de <span className="accent">tu operación</span>.</h2><p className="aq-section-lead">Integramos, desarrollamos y ordenamos procesos complejos para empresas que ya saben qué necesitan resolver.</p></div></div><div className="aq-grid-3">{phases.map(([title, desc, icon], idx) => <Link href="/#contacto" key={title} className="aq-card"><div className="aq-card-num">{String(idx+1).padStart(2,"0")}/06</div><div className="aq-card-icon"><AqIcon name={icon} size={32}/></div><h3 className="aq-card-title">{title}</h3><p className="aq-card-desc">{desc}</p><div className="aq-card-arrow"><IconArrowUR size={20}/></div></Link>)}</div></div></section>;
}
