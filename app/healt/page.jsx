export const dynamic = "force-dynamic"; // Evita la generación estática
export const runtime = "nodejs"; // Asegura que Next.js ejecute esto en el servidor

export default function HealthCheck() {
  return Response.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
