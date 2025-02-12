import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Desactiva cache

// Formatear el tiempo de actividad en días, horas, minutos y segundos
function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return { days: d, hours: h, minutes: m, seconds: s };
}

export async function GET() {
  const memoryUsage = process.memoryUsage();
  const cpuUsage = process.cpuUsage();
  const loadAverage = process.platform === "win32" ? "N/A" : require("os").loadavg();

  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toLocaleString(),
      uptime: formatUptime(process.uptime()), // Formato más detallado
      node_version: process.version,
      memory: {
        rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`, // Memoria usada por el proceso
        heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
        heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
      },
      cpu: {
        user: `${cpuUsage.user / 1000000} ms`,
        system: `${cpuUsage.system / 1000000} ms`,
      },
      load_average: loadAverage, // Solo disponible en Unix
    },
    { status: 200 }
  );
}
