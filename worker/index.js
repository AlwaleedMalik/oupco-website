// Tiny Worker that only runs for /media/* (see run_worker_first in wrangler.jsonc).
// Workers static assets ignore HTTP Range requests, but iPhone Safari won't play a
// <video> unless the server answers "Range: bytes=…" with 206 Partial Content.
// Everything else on the site is served straight from static assets, never touching this code.

const MEDIA_CACHE = "public, max-age=2592000, stale-while-revalidate=86400";

export default {
  async fetch(request, env) {
    // Fetch the full file from static assets (drop Range so we always get the whole body)
    const assetReq = new Request(request.url, { method: "GET", headers: { Accept: request.headers.get("Accept") || "*/*" } });
    const asset = await env.ASSETS.fetch(assetReq);
    if (asset.status !== 200) return asset;

    const headers = new Headers(asset.headers);
    headers.set("Accept-Ranges", "bytes");
    headers.set("Cache-Control", MEDIA_CACHE);
    headers.set("X-Content-Type-Options", "nosniff");

    const range = request.headers.get("Range");
    if (!range) {
      return new Response(request.method === "HEAD" ? null : asset.body, { status: 200, headers });
    }

    const body = await asset.arrayBuffer();
    const size = body.byteLength;
    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!m || (m[1] === "" && m[2] === "")) {
      return new Response(request.method === "HEAD" ? null : body, { status: 200, headers });
    }

    let start;
    let end;
    if (m[1] === "") {
      // suffix range: last N bytes
      start = Math.max(0, size - Number(m[2]));
      end = size - 1;
    } else {
      start = Number(m[1]);
      end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
    }

    if (start >= size || start > end) {
      headers.set("Content-Range", `bytes */${size}`);
      headers.delete("Content-Length");
      return new Response(null, { status: 416, headers });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(request.method === "HEAD" ? null : body.slice(start, end + 1), { status: 206, headers });
  },
};
