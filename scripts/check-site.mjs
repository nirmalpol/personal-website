import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const pages = [
  ["/", "index.html", "Nirmal Pol"],
  ["/projects", "projects/index.html", "Projects"],
  ["/cv", "cv/index.html", "Curriculum vitae"],
  ["/prosthetics", "prosthetics/index.html", "Prosthetics designer"],
  [
    "/community/iros-2026",
    "community/iros-2026/index.html",
    "Forceps-Based Fine Manipulation Challenge",
  ],
];
const titles = new Set();
for (const [route, file, heading] of pages) {
  const canonicalPath = route === "/" ? "/" : `${route}/`;
  const html = await readFile(`dist/${file}`, "utf8");
  assert.ok(
    html.includes(heading),
    `${route}: readable content without JavaScript`,
  );
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${route}: one primary heading`,
  );
  assert.equal(
    (html.match(/<title[^>]*>/g) || []).length,
    1,
    `${route}: one title`,
  );
  assert.equal(
    (html.match(/name="description"/g) || []).length,
    1,
    `${route}: one description`,
  );
  assert.equal(
    (html.match(/rel="canonical"/g) || []).length,
    1,
    `${route}: one canonical`,
  );
  assert.ok(
    html.includes(`href="https://nirmalpol.com${canonicalPath}"`),
    `${route}: canonical matches route`,
  );
  assert.ok(!html.includes("<!--app-"), `${route}: rendering markers replaced`);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title), `${route}: unique title`);
  titles.add(title);
  const schema = JSON.parse(
    html.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
    )[1],
  );
  assert.equal(schema["@graph"][0].name, "Nirmal Pol");
  for (const match of html.matchAll(/(?:src|poster)="(\/[^"?#]+)"/g)) {
    await access(`dist${match[1]}`);
  }
  for (const match of html.matchAll(/href="(\/[^"?#]*)/g)) {
    const path = match[1];
    if (path.startsWith("/assets/") || /\.(mp4|svg|png|jpe?g|webp)$/.test(path)) {
      await access(`dist${path}`);
      continue;
    }
    assert.ok(
      pages.some(([known]) => known === path) || path === "/favicon.svg",
      `${route}: valid local link ${path}`,
    );
  }
  console.log(
    `PASS ${route}: content, metadata, structured data, images, and local links`,
  );
}
const cv = await readFile("dist/cv/index.html", "utf8");
assert.ok(cv.includes("Organizer, Forceps-Based Fine Manipulation Challenge"));
const missing = await readFile("dist/404.html", "utf8");
assert.ok(missing.includes("noindex, follow"));
assert.ok(!missing.includes("location.replace"));
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const [route] of pages)
  assert.ok(
    sitemap.includes(
      `<loc>https://nirmalpol.com${route === "/" ? "/" : `${route}/`}</loc>`,
    ),
  );
console.log(
  "PASS organizer CV entry, sitemap coverage, and non-redirecting 404",
);
