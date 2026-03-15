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
import { motion } from "framer-motion";
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
    title: "Nuestro enfoque de servicio",
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/70 dark:bg-stone-900/40 backdrop-blur-xl shadow-sm rounded-3xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] p-8 border border-white/40 dark:border-stone-700/50 relative group overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-custom-orange/5 dark:from-white/5 dark:to-custom-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Número e ícono */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div 
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-white font-black rounded-2xl text-2xl shadow-inner bg-gradient-to-br from-custom-orange to-orange-400 transform group-hover:rotate-6 transition-transform duration-300"
                >
                  {index + 1}
                </div>
                <div className="p-3 md:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 text-custom-orange">
                  <phase.icon className="w-6 h-6 md:w-8 md:h-8 translate-x-[1px] translate-y-[-1px]" />
                </div>
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 mb-4">
                  <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    {phase.highlight}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 mb-4 group-hover:from-custom-orange group-hover:to-orange-400 transition-all duration-300">
                  {phase.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}