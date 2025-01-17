'use client';
import React, { useState, useEffect } from 'react';
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
  const dineroAhorrado = formatNumber(useIncrement(18.2, 0.01, 1237, 2, 12100), 2);
  const proyectosActivos = useIncrement(149, 1, 57, 0, 1800000000); // cada 5 segundos
  const clientesTotales = useIncrement(69, 1, 10000, 0, 180000000); // cada 30 minutos
  const clientesActivos = useIncrement(48, 1, 2000, 0, 180000000); // cada 30 minutos

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-12">
      <Card className="bg-white dark:bg-stone-900 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl p-6 border border-gray-100 dark:border-gray-800 relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-custom-orange dark:text-zinc-200">
            Ahorros Anuales Generados
          </CardTitle>
          <FaDollarSign className="h-6 w-6 text-custom-orange dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">${dineroAhorrado} M</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            +19% desde el año pasado
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>

      <Card className="bg-white dark:bg-stone-900 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl p-6 border border-gray-100 dark:border-gray-800 relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-custom-orange dark:text-zinc-200">
            Desarrollos Activos
          </CardTitle>
          <FaCode className="h-6 w-6 text-custom-orange dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">+{proyectosActivos}</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            +1 en la última semana
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>

      <Card className="bg-white dark:bg-stone-900 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl p-6 border border-gray-100 dark:border-gray-800 relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-custom-orange dark:text-zinc-200">
            Clientes Activos
          </CardTitle>
          <FaUsers className="h-6 w-6 text-custom-orange dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">+{clientesActivos}</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            +4 desde el mes pasado
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>

      <Card className="bg-white dark:bg-stone-900 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl p-6 border border-gray-100 dark:border-gray-800 relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-custom-orange dark:text-zinc-200">
            Clientes Totales
          </CardTitle>
          <FaUsers className="h-6 w-6 text-custom-orange dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">+{clientesTotales}</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            +2 desde el mes pasado
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    </div>
  );
}