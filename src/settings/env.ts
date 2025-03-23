import { z } from "zod";

const envSchema = z.object({
    BOT_TOKEN: z.string({ description: "Discord Bot Token is required" }).min(1),
    WEBHOOK_LOGS_URL: z.string().url().optional(),
    SERVER_PORT: z.string().refine(v => !Number.isNaN(Number(v)), "Invalid server port").optional(),
    OPEN_ROUTER_DEEPSEEK_R1_KEY: z.string({ description: "Open Router DeepSeek R1 API Key is required!" })
    // Env vars...
});

type EnvSchema = z.infer<typeof envSchema>;

export { envSchema, type EnvSchema };