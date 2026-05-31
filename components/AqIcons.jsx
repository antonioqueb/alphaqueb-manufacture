import { ArrowRight, ArrowUpRight, BarChart3, Bot, CalendarDays, Cpu, Database, Factory, Gauge, Globe2, Lock, Map, Route, ShieldCheck, Target, Truck, Users, Wrench, Zap } from "lucide-react";

export const IconArrow = ArrowRight;
export const IconArrowUR = ArrowUpRight;

const ICONS = {
  plc: Cpu,
  truck: Truck,
  calendar: CalendarDays,
  shield: ShieldCheck,
  data: BarChart3,
  strategy: Target,
  factory: Factory,
  database: Database,
  wrench: Wrench,
  zap: Zap,
  bot: Bot,
  lock: Lock,
  globe: Globe2,
  map: Map,
  gauge: Gauge,
  users: Users,
  route: Route,
};

export function AqIcon({ name = "plc", size = 24, className = "" }) {
  const Cmp = ICONS[name] || Cpu;
  return <Cmp size={size} strokeWidth={1.5} className={className} />;
}

export function iconForText(text = "") {
  const t = text.toLowerCase();
  if (t.includes("scada") || t.includes("plc") || t.includes("automat")) return "plc";
  if (t.includes("robot")) return "bot";
  if (t.includes("datos") || t.includes("dashboard") || t.includes("bi")) return "data";
  if (t.includes("seguridad") || t.includes("ciber")) return "lock";
  if (t.includes("erp") || t.includes("mes") || t.includes("sistema")) return "database";
  if (t.includes("mantenimiento")) return "wrench";
  if (t.includes("cost")) return "gauge";
  if (t.includes("comercio") || t.includes("contenedor") || t.includes("aduana")) return "truck";
  if (t.includes("evento")) return "calendar";
  if (t.includes("ambient")) return "shield";
  return "factory";
}
