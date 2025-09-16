'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const [visibleCards, setVisibleCards] = useState(
    new Array(cards.length).fill(false),
  );
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    cardRefs.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-12">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <Card
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className={`relative overflow-hidden bg-white dark:bg-stone-900 shadow-lg rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-all duration-700 transform hover:scale-105 hover:shadow-xl group ${visibleCards[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-custom-orange/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-lg font-semibold text-custom-orange dark:text-zinc-200">
                {card.title}
              </CardTitle>
              <Icon className="h-6 w-6 text-custom-orange dark:text-zinc-200 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 transition-colors duration-300 group-hover:text-custom-orange">
                {card.value}
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
                {card.description}
              </p>
            </CardContent>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        );
      })}
    </div>
  );
}

