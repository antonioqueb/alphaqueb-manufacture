"use client";
import React from "react";
import Link from "next/link";
import {
  Search,
  Target,
  Settings,
  Wrench,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import ContactAnimation from "./ContactAnimation";

/* ───────────── Copy profesional ───────────── */
const copy = {
  hook: "Optimiza tu operación industrial con tecnología confiable.",
  promise: "Integramos soluciones que reducen ineficiencias y elevan la rentabilidad.",
  proof: "Más de 70 proyectos industriales respaldan nuestra metodología.",

  title: "Consultoría tecnológica para la industria",
  subtitle: "Especialistas en ERP, CRM y MES adaptados a tus procesos.",

  problems: [
    "Procesos manuales costosos e ineficientes",
    "Riesgos por incumplimiento normativo",
    "Falta de visibilidad para planear la producción",
    "Decisiones basadas en datos desactualizados",
  ],

  service: {
    title: "Metodología de implementación",
    slug: "integracion-sistemas",
    phases: [
      {
        title: "Diagnóstico Operativo",
        description:
          "Analizamos tu operación y definimos indicadores para medir la mejora. Entregamos un informe con oportunidades de optimización.",
        icon: Search,
        highlight: "Visión clara del punto de partida",
      },
      {
        title: "Diseño de la Solución",
        description:
          "Seleccionamos las herramientas que mejor se ajustan a tus objetivos y diseñamos la arquitectura del sistema.",
        icon: Target,
        highlight: "Tecnología alineada al negocio",
      },
      {
        title: "Implementación y Configuración",
        description:
          "Configuramos los sistemas y migramos la información con un plan que asegura la continuidad de la operación.",
        icon: Settings,
        highlight: "Despliegue sin contratiempos",
      },
      {
        title: "Desarrollo Personalizado",
        description:
          "Creamos integraciones y módulos específicos cuando los sistemas estándar no cubren requerimientos críticos.",
        icon: Wrench,
        highlight: "Soluciones a medida",
      },
      {
        title: "Capacitación y Acompañamiento",
        description:
          "Entrenamos a tu equipo con casos reales y damos seguimiento durante el arranque para garantizar la adopción.",
        icon: GraduationCap,
        highlight: "Equipo preparado desde el día uno",
      },
      {
        title: "Soporte y Mejora Continua",
        description:
          "Monitoreamos indicadores clave y proponemos ajustes que mantengan la eficiencia a largo plazo.",
        icon: ShieldCheck,
        highlight: "Acompañamiento permanente",
      },
    ],
  },

  guarantees: [
    "Diagnóstico inicial sin costo",
    "Acompañamiento durante la implementación",
    "Soporte especializado posterior al arranque",
  ],

  cta: "Agenda una consultoría sin costo",
  ctaSubtitle: "Identifica oportunidades de mejora en tu planta",
  urgency: "Disponibilidad limitada cada trimestre",
  learnMore: "Solicita información",
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
                <phase.icon className="w-10 h-10 text-custom-orange" />
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



      {/* P.S. */}
      <div className="mt-12 text-center bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg border border-stone-100 dark:border-stone-800">
        <p className="text-lg text-stone-700 dark:text-stone-300">
          <strong>P.S.</strong> Las empresas que ya trabajan con ALPHAQUEB compartían las mismas dudas.
          Hoy operan con mayor control y rentabilidad. <strong>¿Qué podríamos lograr juntos?</strong>
        </p>
      </div>

    </section>
  );
}