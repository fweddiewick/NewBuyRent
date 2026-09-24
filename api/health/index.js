/**
 * Standalone Vercel Serverless Function & Express Route Handler
 * api/health/index.js (ESM)
 * 
 * Health check endpoint for /api/health
 */

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Health checks should not be cached
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  const geminiConfigured = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== "");
  const uraConfigured = Boolean(process.env.URA_ACCESS_KEY && process.env.URA_ACCESS_KEY.trim() !== "");

  const healthPayload = {
    status: "ok",
    service: "SG Property Co-Pilot API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    checks: {
      geminiApiKey: geminiConfigured ? "configured" : "missing",
      uraAccessKey: uraConfigured ? "configured" : "not_provided (using benchmark fallback)",
      memoryUsage: process.memoryUsage ? {
        rssMb: Math.round(process.memoryUsage().rss / 1024 / 1024),
        heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024)
      } : undefined
    }
  };

  return res.status(200).json(healthPayload);
}
