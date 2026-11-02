import { sitePages, siteUrl } from "@/lib/site";

export function GET() {
  const pages = sitePages
    .map(({ path, title, description }) => `- [${title}](${siteUrl}${path}): ${description}`)
    .join("\n");

  const body = `# Happy Boy Company Limited

> Happy Boy Company Limited is a diversified corporation based in Accra, Ghana, spanning fashion, agriculture, real estate, electronics, automobile, energy, and mining.

## Website

${pages}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
