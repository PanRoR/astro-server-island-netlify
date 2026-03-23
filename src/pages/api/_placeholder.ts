// src/pages/api/_placeholder.ts
export const prerender = false;
export function GET() {
  return new Response(null, { status: 204 });
}
