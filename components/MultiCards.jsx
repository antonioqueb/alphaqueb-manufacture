'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCode } from "react-icons/fa";

// Función para formatear el número con comas como separadores decimales
function formatNumber(value, decimals) {
  return value.toLocaleString('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function incrementNumber(value, increment, max, decimals) {
  return Math.min(value + increment, max).toFixed(decimals);
}

function useIncrement(initialValue, increment, max, decimals, interval) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => parseFloat(incrementNumber(prev, increment, max, decimals)));
    }, interval);
    return () => clearInterval(timer);
  }, [increment, max, decimals, interval]);
  return value;
}

export default function MultiCards() {
  const dineroAhorrado = formatNumber(
    useIncrement(28.2, 0.01, 1237, 2, 12100),
    2,
  );
  const proyectosActivos = useIncrement(179, 1, 57, 0, 1800000000); // cada 5 segundos
  const clientesTotales = useIncrement(89, 1, 10000, 0, 180000000); // cada 30 minutos
  const clientesActivos = useIncrement(72, 1, 2000, 0, 180000000); // cada 30 minutos

  const cards = [
    {
      title: "Ahorros Anuales Generados",
      icon: FaDollarSign,
      value: `$${dineroAhorrado} M`,
      description: "+20% desde el año pasado",
    },
    {
      title: "Desarrollos Activos",
      icon: FaCode,
      value: `+${proyectosActivos}`,
      description: "+1 en la última semana",
    },
    {
      title: "Clientes Activos",
      icon: FaUsers,
      value: `+${clientesActivos}`,
      description: "+4 desde el mes pasado",
    },
    {
      title: "Clientes Totales",
      icon: FaUsers,
      value: `+${clientesTotales}`,
      description: "+3 desde el mes pasado",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-12">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
          >
            <Card
              className="relative h-full overflow-hidden bg-white/70 dark:bg-stone-900/40 backdrop-blur-xl shadow-sm rounded-3xl border border-white/40 dark:border-stone-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] group"
            >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-custom-orange/5 dark:from-white/5 dark:to-custom-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-6 px-6 relative z-10">
              <CardTitle className="text-sm md:text-base font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                {card.title}
              </CardTitle>
              <div className="p-3 bg-custom-orange/10 dark:bg-custom-orange/20 rounded-2xl group-hover:scale-110 group-hover:bg-custom-orange/20 transition-all duration-300">
                <Icon className="h-5 w-5 text-custom-orange dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pb-6 pt-2">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 transition-all duration-300 group-hover:from-custom-orange group-hover:to-orange-400">
                {card.value}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {card.description}
                </p>
              </div>
            </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

