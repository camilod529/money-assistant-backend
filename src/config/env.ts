import { config } from 'dotenv';
import { z } from 'zod';

config(); // Load environment variables from .env file

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, { message: 'Database URL is required' }),
  JWT_SECRET: z.string().min(1, { message: 'JWT secret is required' }),
});

export const env = envSchema.parse(process.env);
