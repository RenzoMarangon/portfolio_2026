import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Cliente Redis (serverless)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Configuración del rate limit
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 requests cada 10 minutos
  analytics: true,
});
