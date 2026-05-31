"use client";
import { useState } from "react";
import { IconArrow } from "@/components/AqIcons";
import { LineChart } from "@/components/AqCharts";

export default function Banner() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState(null);
  const handleSend = async () => {
    if (!phoneNumber || !name) { setStatus("empty"); return; }
    try {
      const response = await fetch("https://contact.alphaqueb.com/create_contact_phone", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, phone_number: phoneNumber, user_id: 2, company_id: 1 }) });
      if (!response.ok) throw new Error("Error");
      setStatus("success"); setPhoneNumber(""); setName("");
    } catch { setStatus("error"); }
  };
  return <section className="aq-hero"><div className="aq-wrap"><div className="aq-hero-grid"><div><div className="aq-eyebrow">Consultoría selectiva · Monterrey · operación nacional</div><h1 className="aq-hero-title">El sistema se adapta a <span className="lime">tu operación.</span><br/><span className="stroke">No al revés.</span></h1><p className="aq-hero-sub">Implementamos y desarrollamos sistemas a la medida para empresas que ya crecieron más allá de sus sistemas actuales.</p><div className="aq-contact-form" style={{ maxWidth: 620 }}><div className="aq-field-row"><div className="aq-field"><label>Nombre</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" /></div><div className="aq-field"><label>Teléfono</label><input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Teléfono" /></div></div><button className="aq-btn aq-btn-primary" type="button" onClick={handleSend}>Plantea tu reto <IconArrow size={14}/></button>{status === "success" && <p className="aq-form-success">Número recibido con éxito.</p>}{status === "error" && <p className="aq-form-error">Error al enviar.</p>}{status === "empty" && <p className="aq-form-error">Ingresa nombre y teléfono.</p>}</div></div><div className="aq-panel"><span className="aq-panel-tag">Vista de producto</span><div className="aq-panel-head"><div><div className="title">Operación conectada</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 32, lineHeight: 1, marginTop: 6 }}>PROCESOS · DATOS · DECISIÓN</div></div><div className="aq-live"><span className="aq-live-dot"/>ILUSTRATIVO</div></div><div className="aq-chart"><LineChart data={[30,36,41,48,52,64,70,78,86,91]} /></div><div className="aq-panel-foot"><span>Procesos</span><span>Datos</span><span>Soporte</span></div></div></div></div></section>;
}
