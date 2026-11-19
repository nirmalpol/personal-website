import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";

export function render(url: string) {
  const context = {} as { helmet: HelmetServerState };
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = context;
  return {
    html,
    head: [helmet.title, helmet.meta, helmet.link, helmet.script]
      .map((tag) => tag.toString())
      .join("\n"),
  };
}
