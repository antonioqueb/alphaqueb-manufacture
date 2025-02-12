import { NextResponse } from "next/server";

// Función para formatear el tiempo de actividad
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
      uptime: formatUptime(process.uptime()),
      timestamp: new Date().toLocaleString(), // Formato local
    },
    { status: 200 }
  );
}
