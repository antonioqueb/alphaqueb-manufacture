export default function HealthCheck() {
    const uptime = process.uptime(); // Tiempo en segundos desde que el servidor inició
    const currentTime = new Date().toISOString(); // Fecha actual en formato ISO
  
    return Response.json({
      status: "ok",
      message: "El servidor está funcionando correctamente.",
      uptime: `${Math.floor(uptime / 60)} minutos y ${Math.floor(uptime % 60)} segundos`,
      timestamp: currentTime,
    });
  }
  