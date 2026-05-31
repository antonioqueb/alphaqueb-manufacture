"use client";

import { useEffect, useState } from "react";
import { IconArrow } from "@/components/AqIcons";

const TIMELINE = [
  { code: "01", title: "Mensaje recibido", detail: "Tu solicitud entró al sistema y quedó registrada en CRM." },
  { code: "02", title: "Revisión inicial", detail: "Un líder de proyecto la valida en las próximas horas hábiles." },
  { code: "03", title: "Contacto directo", detail: "Te escribimos en menos de 24 h para agendar una llamada corta." },
  { code: "04", title: "Análisis extenso", detail: "Si hay encaje, abrimos un diagnóstico pagado de 30–40 h sobre tu operación." },
];

function SuccessModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="aq-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="aq-modal-title" onClick={onClose}>
      <div className="aq-modal" onClick={(e) => e.stopPropagation()}>
        <div className="aq-modal-scan" aria-hidden />
        <div className="aq-modal-head">
          <div className="aq-live"><span className="aq-live-dot" />Transmisión confirmada</div>
          <button type="button" className="aq-modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>
        <h3 id="aq-modal-title" className="aq-modal-title">Mensaje <span className="accent">recibido</span>.</h3>
        <p className="aq-modal-lead">
          Gracias por escribirnos. Tu solicitud ya está en nuestro CRM y entró en proceso de revisión. Te contactaremos directamente para dar seguimiento y, si hay encaje, abriremos un análisis extenso de tu operación.
        </p>
        <ol className="aq-modal-timeline">
          {TIMELINE.map((step) => (
            <li key={step.code}>
              <span className="aq-modal-step-code">{step.code}</span>
              <div>
                <b>{step.title}</b>
                <span>{step.detail}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="aq-modal-foot">
          <div className="aq-modal-meta">
            <span>SLA · respuesta &lt; 24 h hábiles</span>
            <span>NDA disponible bajo solicitud</span>
          </div>
          <button type="button" className="aq-btn aq-btn-primary" onClick={onClose}>
            Entendido <IconArrow size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    const formData = new FormData(form);
    const vertical = (formData.get("vertical") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      company: (formData.get("company") || "").toString().trim(),
      message: vertical ? `[${vertical}] ${message}` : message,
    };
    try {
      const response = await fetch("https://odoo.alphaqueb.com/create_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.status !== "success") throw new Error(data.message || "Error al enviar el mensaje");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="aq-section" style={{ paddingBottom: 120 }}>
      <div className="aq-wrap">
        <div className="aq-section-head">
          <span className="aq-section-tag">Contacto</span>
          <div>
            <h2 className="aq-section-title">Cuéntanos tu <span className="accent">reto</span>.</h2>
            <p className="aq-section-lead">
              Si tu operación ya creció más allá de tus sistemas y sabes lo que quieres resolver, en una llamada corta definimos si tenemos algo que aportar. Si no, te lo decimos de frente.
            </p>
          </div>
        </div>
        <div className="aq-contact-grid">
          <div className="aq-contact-info">
            <dl>
              <dt>Estudio</dt>
              <dd className="big">Monterrey, NL</dd>
              <dt>Operación</dt>
              <dd>Nacional · proyectos selectivos</dd>
              <dt>Correo</dt>
              <dd><a href="mailto:hola@alphaqueb.com">hola@alphaqueb.com</a></dd>
              <dt>Horario</dt>
              <dd>Lun–Vie · 09:00 — 19:00 CDT</dd>
            </dl>
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--aq-line-soft)" }}>
              <div style={{ fontFamily: "var(--aq-font-tech)", fontSize: 12.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--aq-text-dim)", marginBottom: 16 }}>Disponibilidad</div>
              <div className="aq-live"><span className="aq-live-dot" />Aceptando proyectos selectivos</div>
            </div>
          </div>
          <form className="aq-contact-form" onSubmit={handleSubmit}>
            <div className="aq-field-row">
              <div className="aq-field"><label htmlFor="name">Nombre completo</label><input id="name" name="name" required placeholder="Nombre" /></div>
              <div className="aq-field"><label htmlFor="company">Empresa</label><input id="company" name="company" placeholder="Empresa" /></div>
            </div>
            <div className="aq-field-row">
              <div className="aq-field"><label htmlFor="email">Correo corporativo</label><input id="email" name="email" type="email" required placeholder="correo@empresa.com" /></div>
              <div className="aq-field"><label htmlFor="phone">Teléfono <span style={{ color: "var(--aq-text-dim)", fontWeight: 400 }}>(opcional)</span></label><input id="phone" name="phone" type="tel" placeholder="+52 ..." /></div>
            </div>
            <div className="aq-field"><label htmlFor="vertical">Reto principal</label><select id="vertical" name="vertical" defaultValue=""><option value="" disabled>Selecciona…</option><option>Manufactura y calidad</option><option>Importación y cadena de suministro</option><option>Eventos y renta</option><option>Cumplimiento ambiental</option><option>Sistemas empresariales a la medida</option><option>Otro reto complejo</option></select></div>
            <div className="aq-field"><label htmlFor="message">¿Qué estás buscando resolver?</label><textarea id="message" name="message" required placeholder="Describe el contexto, qué sistemas usan hoy, dónde está el límite y qué resultado esperas." /></div>
            <button className="aq-btn aq-btn-primary" type="submit" disabled={status === "loading"}>Enviar para evaluación <IconArrow size={14} /></button>
            <div className="aq-form-note">Respuesta en &lt; 24 h · NDA disponible · diagnóstico pagado de 30–40 h</div>
            {status === "error" && <p className="aq-form-error">Error al enviar el mensaje. Inténtalo de nuevo o escríbenos a hola@alphaqueb.com.</p>}
          </form>
        </div>
      </div>
      <SuccessModal open={status === "success"} onClose={() => setStatus(null)} />
    </section>
  );
}
