import { readFileSync } from "fs";
import OpenAI from "openai";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const deepseekClient = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_DEEPSEEK_R1_KEY
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const personalityFilePath = path.join(__dirname, "../../../public/personality.md");

export const deepseekPersonality = readFileSync(personalityFilePath, "utf-8");