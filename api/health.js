/**
 * Standalone Vercel Serverless Function & Express Route Handler
 * api/health.js (ESM)
 * 
 * Re-exports health handler from api/health/index.js
 */

import healthHandler from "./health/index.js";

export default async function handler(req, res) {
  return healthHandler(req, res);
}
