import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

// Emit real HTML pages for static hosting, search crawlers, and social previews.
const output = resolve("dist");
const serverOutput = resolve(".prerender");
const routes = [
  "/",
  "/projects",
  "/cv",
  "/prosthetics",
  "/community/iros-2026",
];
try {
  await build({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: serverOutput,
      copyPublicDir: false,
    },
  });
  const { render } = await import(
    pathToFileURL(resolve(serverOutput, "entry-server.js")).href
  );
  const template = await readFile(resolve(output, "index.html"), "utf8");
  for (const route of [...routes, "/404"]) {
    const { html, head } = render(route);
    const file = resolve(
      output,
      route === "/404"
        ? "404.html"
        : `${route.slice(1)}${route === "/" ? "" : "/"}index.html`,
    );
    await mkdir(dirname(file), { recursive: true });
    await writeFile(
      file,
      template
        .replace("<!--app-head-->", head)
        .replace("<!--app-html-->", html),
    );
    console.log(`Pre-rendered ${route}`);
  }
  await writeFile(
    resolve(output, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>https://nirmalpol.com${route === "/" ? "/" : `${route}/`}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
} finally {
  await rm(serverOutput, { recursive: true, force: true });
}
