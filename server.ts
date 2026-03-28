import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Use custom to handle routing manually
    });
    app.use(vite.middlewares);

    // Clean URL mapping for development
    app.get("/services", async (req, res, next) => {
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "services.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        next(e);
      }
    });

    app.get("/about", async (req, res, next) => {
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "about.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        next(e);
      }
    });

    app.get("/contact", async (req, res, next) => {
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "contact.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        next(e);
      }
    });

    app.get("/ai-planner", async (req, res, next) => {
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "ai-planner.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        next(e);
      }
    });

    // Fallback to index.html for root
    app.get("/", async (req, res, next) => {
      try {
        const html = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "index.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        next(e);
      }
    });

  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    // Clean URL mapping for production
    app.get("/services", (req, res) => res.sendFile(path.join(distPath, "services.html")));
    app.get("/about", (req, res) => res.sendFile(path.join(distPath, "about.html")));
    app.get("/contact", (req, res) => res.sendFile(path.join(distPath, "contact.html")));
    app.get("/ai-planner", (req, res) => res.sendFile(path.join(distPath, "ai-planner.html")));
    app.get("/", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
