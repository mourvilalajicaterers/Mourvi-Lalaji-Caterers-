import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log("Starting server in mode:", process.env.NODE_ENV || "development");

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    const serveHtml = async (req: express.Request, res: express.Response, next: express.NextFunction, file: string) => {
      try {
        const template = await (await import("fs/promises")).readFile(path.resolve(__dirname, file), "utf-8");
        const html = await vite.transformIndexHtml(req.url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        console.error(`Error serving ${file}:`, e);
        next(e);
      }
    };

    app.get("/", (req, res, next) => serveHtml(req, res, next, "index.html"));
    app.get("/services", (req, res, next) => serveHtml(req, res, next, "services.html"));
    app.get("/about", (req, res, next) => serveHtml(req, res, next, "about.html"));
    app.get("/contact", (req, res, next) => serveHtml(req, res, next, "contact.html"));
    app.get("/ai-planner", (req, res, next) => serveHtml(req, res, next, "ai-planner.html"));
    app.get("/event-gallery", (req, res, next) => serveHtml(req, res, next, "event-gallery.html"));

  } else {
    const distPath = path.join(process.cwd(), "dist");
    console.log("Serving static files from:", distPath);
    
    app.use(express.static(distPath, { extensions: ['html'] }));

    app.get("/services", (req, res) => res.sendFile(path.join(distPath, "services.html")));
    app.get("/about", (req, res) => res.sendFile(path.join(distPath, "about.html")));
    app.get("/contact", (req, res) => res.sendFile(path.join(distPath, "contact.html")));
    app.get("/ai-planner", (req, res) => res.sendFile(path.join(distPath, "ai-planner.html")));
    app.get("/event-gallery", (req, res) => res.sendFile(path.join(distPath, "event-gallery.html")));
    app.get("/", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
