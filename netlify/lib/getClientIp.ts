export function getClientIp(
  headers: Record<string, string | string[] | undefined>,
) {
  const forwarded = headers["x-forwarded-for"];

  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }

  if (Array.isArray(forwarded)) {
    return forwarded[0];
  }

  const clientIp = headers["client-ip"];

  if (typeof clientIp === "string") {
    return clientIp;
  }

  return "unknown";
}
