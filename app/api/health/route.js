import { NextResponse } from "next/server";

// Desactiva el caching para obtener valores en tiempo real
export const dynamic = "force-dynamic";

// Función para formatear el tiempo de actividad en formato hh:mm:ss
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  
  return `${h}h ${m}m ${s}s`;
}

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      uptime: formatUptime(process.uptime()), // Tiempo real
      timestamp: new Date().toLocaleString(), // Formato legible
    },
    { status: 200 }
  );
}
