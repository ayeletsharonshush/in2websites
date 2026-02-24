import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const PORTFOLIO_CODE = "1234";
const ALLOWED_PROXY_URLS = ["https://stuhlservices.com", "https://www.stuhlservices.com"];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/proxy-site", async (req, res) => {
    const targetUrl = (req.query.url as string) || "https://stuhlservices.com";
    if (!ALLOWED_PROXY_URLS.some(u => targetUrl.startsWith(u))) {
      return res.status(403).json({ error: "URL not allowed" });
    }
    try {
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        },
      });
      let html = await response.text();
      const origin = new URL(targetUrl).origin;
      html = html.replace(/(src|href|action)="\/(?!\/)/gi, `$1="${origin}/`);
      html = html.replace(/(src|href|action)='\/(?!\/)/gi, `$1='${origin}/`);
      html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${origin}/">`);
      html = html.replace(/url\(\//g, `url(${origin}/`);
      res.removeHeader("X-Frame-Options");
      res.removeHeader("Content-Security-Policy");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(html);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch site" });
    }
  });

  app.get("/api/proxy-asset", async (req, res) => {
    const assetPath = req.query.path as string;
    if (!assetPath) return res.status(400).json({ error: "Missing path" });
    const targetUrl = `https://stuhlservices.com/${assetPath}`;
    try {
      const response = await fetch(targetUrl);
      const contentType = response.headers.get("content-type") || "application/octet-stream";
      res.setHeader("Content-Type", contentType);
      res.setHeader("Access-Control-Allow-Origin", "*");
      const buffer = Buffer.from(await response.arrayBuffer());
      res.send(buffer);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch asset" });
    }
  });

  app.post("/api/portfolio/verify", (req, res) => {
    const { code } = req.body;
    if (code === PORTFOLIO_CODE) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    console.log("Contact form submission:", { name, email, company: req.body.company, message });
    res.json({ success: true });
  });

  return httpServer;
}
