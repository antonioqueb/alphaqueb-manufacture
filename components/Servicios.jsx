"use client";
import React from "react";
import Link from "next/link";

/* ───────────── Copy mejorado con fórmula de ventas ───────────── */
const copy = {
  hook: "¿Por qué algunas industrias mexicanas generan 3X más utilidades que sus competidores usando exactamente los mismos recursos?",
  promise: "Implementación de sistemas industriales que elimina el 73% de las ineficiencias ocultas",
  proof: "Comprobado en 69 industrias reales. Resultados garantizados o dinero de vuelta.",
  
  title: "La única consultora que implementa sistemas que se adaptan a TU industria, no al revés",
  subtitle: "Somos expertos en ERP, CRM y MES industriales. Convertimos tus procesos en flujos digitales que generan utilidades reales",
  
  problems: [
    "Perdiendo $847 pesos por hora en procesos manuales",
    "Pagando multas evitables por incumplimiento normativo", 
    "Rechazando pedidos por falta de visibilidad",
    "Trabajando con datos de ayer para decisiones de hoy"
  ],

  service: {
    title: "Flujo Integral de Implementación de Sistemas",
    slug: "integracion-sistemas",
    phases: [
      {
        title: "Auditoría Express y Diagnóstico ROI",
        description: "Nuestros consultores especializados mapean cada área operativa, detectan las 7 fugas de dinero ocultas y cuantifican el beneficio económico exacto de implementar sistemas ERP, CRM o MES. Garantizamos encontrar $50,000+ en ahorros identificables.",
        icon: "🔍",
        highlight: "ROI visible en 24 horas"
      },
      {
        title: "Selección y Diseño de Solución",
        description: "Seleccionamos el sistema industrial más eficiente (SAP, Oracle, Microsoft, Odoo, etc.) y diseñamos la arquitectura específica para TU industria. Priorizamos resultados rápidos con retorno de inversión medible en 90 días.",
        icon: "🎯", 
        highlight: "Sistemas líderes del mercado"
      },
      {
        title: "Implementación y Configuración Experta",
        description: "Nuestros desarrolladores e ingenieros implementan y configuran la plataforma para reflejar tus flujos reales. Migramos datos con seguridad bancaria y garantizamos cero tiempo fuera de operación.",
        icon: "⚡",
        highlight: "100% uptime garantizado"
      },
      {
        title: "Desarrollo y Personalización a Medida", 
        description: "Cuando los sistemas estándar no cubren necesidades críticas de tu industria, nuestro equipo de desarrollo crea módulos exactos o integraciones personalizadas que se pagan solos en menos de 6 meses.",
        icon: "🔧",
        highlight: "Desarrollo personalizado"
      },
      {
        title: "Capacitación y Adopción Garantizada",
        description: "Nuestros consultores entrenan a tu gente con casos reales de tu planta. Garantizamos que tu equipo domine las herramientas desde el día 1, con 95%+ de adopción antes de la puesta en marcha oficial.",
        icon: "🎓",
        highlight: "95% adopción garantizada"
      },
      {
        title: "Soporte Continuo y Consultoría Especializada",
        description: "Un consultor senior asignado exclusivamente a tu cuenta. Monitoreamos KPIs críticos 24/7, liberamos mejoras iterativas y proporcionamos consultoría estratégica para mantener tu ventaja competitiva.",
        icon: "🛡️",
        highlight: "Consultor dedicado 24/7"
      },
    ],
  },



  guarantees: [
    "90 días: Si no ves ROI medible, cancelamos sin costo",
    "6 meses: Si no recuperas la inversión, te devolvemos todo",
    "12 meses: Si no estás satisfecho, migramos tu data gratis"
  ],

  cta: "OBTÉN TU CONSULTORÍA GRATUITA DE $18,500",
  ctaSubtitle: "Descubre las 7 fugas de dinero ocultas en tu industria",
  urgency: "Solo trabajamos con 12 nuevas industrias por trimestre",
  learnMore: "Agenda tu consultoría ahora →",
};

/* ───────────── Componente ───────────── */
export default function Servicios() {
  return (
    <section className="mx-auto max-w-14xl px-4 py-16">
      {/* Fases del servicio - 2 por fila */}
      <div className="mb-16">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-custom-orange dark:text-custom-orange-light mb-12">
          {copy.service.title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {copy.service.phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white dark:bg-stone-900 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl p-8 border border-stone-100 dark:border-stone-800 relative group"
            >
              {/* Número e ícono */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="flex items-center justify-center w-16 h-16 text-white font-bold rounded-full text-xl shadow-lg"
                  style={{ backgroundColor: '#ff943d' }}
                >
                  {index + 1}
                </div>
                <div className="text-4xl">{phase.icon}</div>
                <div className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                  <span className="text-orange-700 dark:text-orange-300 text-sm font-semibold">
                    {phase.highlight}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 group-hover:text-custom-orange transition-colors">
                  {phase.title}
                </h4>
                <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>
              
              {/* Línea de gradiente inferior al hover */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA principal */}
      <div className="text-center rounded-xl p-12 text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #ff943d 0%, #ff7f00 100%)' }}>
        <div className="mb-4 bg-yellow-300 text-yellow-800 px-4 py-2 rounded-full inline-block font-bold">
          {copy.urgency}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          {copy.cta}
        </h3>
        <p className="text-xl mb-8">
          {copy.ctaSubtitle}
        </p>
        <Link
          href={`#contacto`}
          className="inline-block bg-white px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ color: '#ff943d' }}
        >
          {copy.learnMore}
        </Link>
        <p className="text-sm mt-4 opacity-90">
          No enviamos vendedores. Solo consultores especializados e ingenieros que entienden tu negocio.
        </p>
      </div>

      {/* P.S. */}
      <div className="mt-12 text-center bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg border border-stone-100 dark:border-stone-800">
        <p className="text-lg text-stone-700 dark:text-stone-300">
          <strong>P.S.</strong> Las 69 industrias que ya transformamos con ALPHAQUEB tenían algo en común: 
          todas pensaron "esto es demasiado bueno para ser verdad" antes de llamar. 
          La diferencia es que ellas sí llamaron. <strong>¿Cuál será tu historia en 6 meses?</strong>
        </p>
      </div>

    </section>
  );
}