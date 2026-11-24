export default async (request, context) => {
  const response = await context.next();

  let hostname = "";
  try {
    const rawHost =
      request.headers.get("x-forwarded-host") ||
      request.headers.get("host") ||
      new URL(request.url).hostname;
    hostname = rawHost.split(",")[0].trim().split(":")[0].toLowerCase();
  } catch (_err) {
    hostname = "";
  }

  if (hostname === "netlify.app" || hostname.endsWith(".netlify.app")) {
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return response;
};

export const config = {
  path: "/*"
};
