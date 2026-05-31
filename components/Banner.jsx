"use client";
import { useState } from "react";
import Link from "next/link";
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
  return <section className="aq-hero"><div className="aq-wrap"><div className="aq-hero-grid"><div><div className="aq-eyebrow">Tecnología para la industria mexicana</div><h1 className="aq-hero-title">Sistemas que <span className="lime">ordenan</span> tu operación.</h1><p className="aq-hero-sub">Sistemas industriales como signo de eficiencia, cumplimiento y resultados.</p><div className="aq-contact-form" style={{ maxWidth: 620 }}><div className="aq-field-row"><div className="aq-field"><label>Nombre</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" /></div><div className="aq-field"><label>Teléfono</label><input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Teléfono" /></div></div><button className="aq-btn aq-btn-primary" type="button" onClick={handleSend}>Enviar <IconArrow size={14}/></button>{status === "success" && <p className="aq-form-success">Número recibido con éxito.</p>}{status === "error" && <p className="aq-form-error">Error al enviar.</p>}{status === "empty" && <p className="aq-form-error">Ingresa nombre y teléfono.</p>}</div></div><div className="aq-panel"><span className="aq-panel-tag">Dashboard operativo</span><div className="aq-panel-head"><div><div className="title">Industria conectada</div><div style={{ fontFamily: "var(--aq-font-head)", fontSize: 32, lineHeight: 1, marginTop: 6 }}>EFICIENCIA · CONTROL</div></div><div className="aq-live"><span className="aq-live-dot"/>EN VIVO</div></div><div className="aq-chart"><LineChart data={[30,36,41,48,52,64,70,78,86,91]} /></div><div className="aq-panel-foot"><span>ERP</span><span>SCADA</span><span>BI</span></div></div></div></div></section>;
}
